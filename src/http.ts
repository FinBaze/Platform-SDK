import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { Kind, print } from 'graphql';
import type { DocumentNode } from 'graphql';

import {
  FinbazeAuthenticationError,
  FinbazeError,
  FinbazeGraphQLError,
  FinbazeRateLimitError,
  type FinbazeGraphQLErrorDetail,
} from './errors.js';

export const SDK_VERSION = '1.1.0';
/** Sent as `FinBaze-Version`; constant per SDK major. The API ignores it until it supports dated versions. */
export const DEFAULT_API_VERSION = '2026-11-01';
export const LIVE_BASE_URL = 'https://api.platform.finbaze.com';
export const SANDBOX_BASE_URL = 'https://sandbox.api.platform.finbaze.com';

export type FinbazeClientConfig = {
  /** Platform secret or restricted key: `fb_sk_live_…`, `fb_sk_test_…`, `fb_rk_…`. */
  secretKey?: string;
  /** A ready access token, for example a platform user token. */
  accessToken?: string;
  /** OAuth client credentials of a profile or firm API credential. */
  clientId?: string;
  clientSecret?: string;
  profileId?: string;
  /** Default: the live API, or the sandbox API for `fb_sk_test_` / `fb_rk_test_` keys. */
  baseUrl?: string;
  /** `FinBaze-Version` header. */
  apiVersion?: string;
  /** Retries after network errors, 429 and 503. Default 2. Mutations only retry with an idempotency key (one is generated when this is above 0). */
  maxNetworkRetries?: number;
  /** Per attempt. Default 30 000. */
  timeoutMs?: number;
  fetch?: typeof fetch;
  /** Appended to the User-Agent. */
  appInfo?: { name: string; version?: string; url?: string };
  /** Scopes to ask for when exchanging a secret or restricted key. */
  scopes?: string[];
};

export type RequestOptions = {
  /** `Idempotency-Key` header. Makes a mutation safe to retry. */
  idempotencyKey?: string;
  signal?: AbortSignal;
};

type GraphQLResponse<TData> = {
  data?: TData;
  errors?: FinbazeGraphQLErrorDetail[];
};

type Token = { accessToken: string; expiresAt: number };

/** Where tokens come from. A sub-client (`asUser`) swaps this, nothing else. */
export type TokenProvider = () => Promise<string>;

const REFRESH_MARGIN_MS = 30_000;

function isTestKey(key: string | undefined): boolean {
  return /^fb_(sk|rk)_test_/.test(key ?? '');
}

function randomId(): string {
  const c = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
  if (c?.randomUUID) return c.randomUUID();
  return `${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}-${Math.random().toString(16).slice(2)}`;
}

/** True for a `mutation` document. Queries are always safe to retry. */
export function isMutation(document: string | DocumentNode): boolean {
  if (typeof document !== 'string') {
    return document.definitions.some(
      (d) => d.kind === Kind.OPERATION_DEFINITION && d.operation === 'mutation',
    );
  }
  const stripped = document.replace(/#[^\n]*/g, '').trimStart();
  return /^mutation\b/.test(stripped);
}

function parseRetryAfter(value: string | null): number | undefined {
  if (!value) return undefined;
  const seconds = Number(value);
  return Number.isFinite(seconds) ? seconds : undefined;
}

function messageOf(data: unknown): string | undefined {
  const message = (data as { message?: unknown } | undefined)?.message;
  return typeof message === 'string' ? message : Array.isArray(message) ? message.join(', ') : undefined;
}

const sleepFor = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

export class FinbazeHttpClient {
  readonly baseUrl: string;
  readonly config: FinbazeClientConfig;
  private readonly fetchImpl: typeof fetch;
  private readonly tokenProvider: TokenProvider;
  private readonly maxRetries: number;
  private readonly timeoutMs: number;
  private readonly userAgent: string;
  private readonly apiVersion: string;
  private tokenCache: Token | null = null;

  constructor(config: FinbazeClientConfig = {}, opts?: { tokenProvider?: TokenProvider }) {
    this.config = config;
    this.baseUrl = (config.baseUrl ?? (isTestKey(config.secretKey) ? SANDBOX_BASE_URL : LIVE_BASE_URL)).replace(/\/$/, '');
    this.fetchImpl = config.fetch ?? globalThis.fetch?.bind(globalThis);
    this.maxRetries = Math.max(0, config.maxNetworkRetries ?? 2);
    this.timeoutMs = config.timeoutMs ?? 30_000;
    this.apiVersion = config.apiVersion ?? DEFAULT_API_VERSION;
    const app = config.appInfo
      ? ` ${config.appInfo.name}${config.appInfo.version ? `/${config.appInfo.version}` : ''}${config.appInfo.url ? ` (${config.appInfo.url})` : ''}`
      : '';
    this.userAgent = `finbaze-platform-sdk/${SDK_VERSION}${app}`;

    if (!this.fetchImpl) {
      throw new FinbazeError('fetch is not available. Pass config.fetch or use Node 18+ / a modern browser.');
    }

    if (opts?.tokenProvider) {
      this.tokenProvider = opts.tokenProvider;
      return;
    }
    if (config.accessToken) {
      const token = config.accessToken;
      this.tokenProvider = async () => token;
    } else if (config.secretKey) {
      if (!/^fb_(sk|rk)_(live|test)_/.test(config.secretKey)) {
        throw new FinbazeAuthenticationError('secretKey must be a platform secret or restricted key (fb_sk_… or fb_rk_…).');
      }
      this.tokenProvider = () => this.cached(() => this.exchange({ client_secret: config.secretKey!, ...(config.scopes?.length ? { scope: config.scopes.join(' ') } : {}) }));
    } else if (config.clientId && config.clientSecret && config.profileId) {
      this.tokenProvider = () =>
        this.cached(() => this.exchange({ client_id: config.clientId!, client_secret: config.clientSecret!, profile_id: config.profileId! }));
    } else {
      throw new FinbazeAuthenticationError('Provide secretKey, accessToken, or clientId + clientSecret + profileId.');
    }
  }

  /** A client with the same settings that authenticates with `tokenProvider` instead. */
  withTokenProvider(tokenProvider: TokenProvider): FinbazeHttpClient {
    return new FinbazeHttpClient(this.config, { tokenProvider });
  }

  async request<TData, TVars extends Record<string, unknown> | undefined>(
    document: string | DocumentNode | TypedDocumentNode<TData, TVars>,
    variables?: TVars,
    operationName?: string,
    options: RequestOptions = {},
  ): Promise<TData> {
    const query = typeof document === 'string' ? document : print(document as DocumentNode);
    const mutation = isMutation(document as string | DocumentNode);
    // A mutation retried without a key could run twice, so it gets one (or is not retried at all).
    const idempotencyKey = mutation && this.maxRetries > 0 ? (options.idempotencyKey ?? randomId()) : options.idempotencyKey;
    const body = JSON.stringify({
      query,
      ...(variables ? { variables } : {}),
      ...(operationName ? { operationName } : {}),
    });

    let attempt = 0;
    for (;;) {
      try {
        return await this.once<TData>(body, idempotencyKey, options.signal);
      } catch (error) {
        const wait = this.retryDelay(error, attempt, !mutation || idempotencyKey !== undefined);
        if (wait === null || options.signal?.aborted) throw error;
        attempt += 1;
        await sleepFor(wait);
      }
    }
  }

  /**
   * An authenticated REST call (bulk uploads and statement files). The body is sent as is; the answer is
   * parsed JSON. Errors carry the API's `{ message, code }` body. Not retried: pass an `Idempotency-Key`
   * and call again yourself.
   */
  async rest<TData = unknown>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    path: string,
    init: { body?: string | Uint8Array; headers?: Record<string, string>; query?: Record<string, string | number | boolean | undefined>; signal?: AbortSignal } = {},
  ): Promise<{ status: number; data: TData; headers: Headers }> {
    const accessToken = await this.tokenProvider();
    const query = Object.entries(init.query ?? {})
      .filter(([, v]) => v !== undefined)
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
      .join('&');
    const { response, text } = await this.fetchText(`${this.baseUrl}/v2${path}${query ? `?${query}` : ''}`, {
      method,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'FinBaze-Version': this.apiVersion,
        'User-Agent': this.userAgent,
        ...(init.headers ?? {}),
      },
      body: init.body as BodyInit | undefined,
      signal: init.signal,
    });
    const requestId = response.headers.get('x-request-id') ?? undefined;
    let data: unknown;
    try {
      data = text.length > 0 ? JSON.parse(text) : undefined;
    } catch {
      data = undefined;
    }
    if (response.status === 401) {
      this.tokenCache = null;
      throw new FinbazeAuthenticationError(messageOf(data) ?? 'Unauthenticated', { requestId });
    }
    if (response.status === 429) {
      throw new FinbazeRateLimitError('Too many requests', { retryAfterSeconds: parseRetryAfter(response.headers.get('retry-after')), requestId });
    }
    if (!response.ok) {
      const body = (data ?? {}) as { code?: string };
      throw new FinbazeError(`${messageOf(data) ?? `HTTP ${response.status}`}${body.code ? ` (${body.code})` : ''}`, { requestId });
    }
    return { status: response.status, data: data as TData, headers: response.headers };
  }

  /** `null` = do not retry. */
  private retryDelay(error: unknown, attempt: number, retryable: boolean): number | null {
    if (!retryable || attempt >= this.maxRetries) return null;
    const backoff = Math.min(2_000, 250 * 2 ** attempt);
    if (error instanceof FinbazeRateLimitError) return (error.retryAfterSeconds ?? 0) * 1000 || backoff;
    if (error instanceof FinbazeNetworkError) return backoff;
    if (error instanceof FinbazeServiceUnavailableError) return backoff;
    return null;
  }

  private async once<TData>(body: string, idempotencyKey: string | undefined, signal?: AbortSignal): Promise<TData> {
    const accessToken = await this.tokenProvider();
    const { response, text } = await this.fetchText(`${this.baseUrl}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
        'FinBaze-Version': this.apiVersion,
        'User-Agent': this.userAgent,
        ...(idempotencyKey ? { 'Idempotency-Key': idempotencyKey } : {}),
      },
      body,
      signal,
    });
    const requestId = response.headers.get('x-request-id') ?? undefined;

    if (response.status === 429) {
      throw new FinbazeRateLimitError('Too many requests', { retryAfterSeconds: parseRetryAfter(response.headers.get('retry-after')), requestId });
    }
    if (response.status === 503) throw new FinbazeServiceUnavailableError(requestId);

    let parsed: GraphQLResponse<TData> | undefined;
    try {
      parsed = text.length > 0 ? (JSON.parse(text) as GraphQLResponse<TData>) : undefined;
    } catch {
      throw new FinbazeError(`GraphQL response was not JSON (HTTP ${response.status})`, { requestId });
    }

    if (parsed?.errors?.length) {
      const error = new FinbazeGraphQLError(parsed.errors, response.status, { requestId });
      if (response.status === 401 || error.code === 'UNAUTHENTICATED') {
        // A cached token the server no longer accepts: forget it so the next call exchanges again.
        this.tokenCache = null;
        throw new FinbazeAuthenticationError(error.message, { requestId });
      }
      throw error;
    }
    if (!response.ok) throw new FinbazeError(`GraphQL request failed with HTTP ${response.status}`, { requestId });
    if (!parsed?.data) throw new FinbazeError('GraphQL response contained no data', { requestId });
    return parsed.data;
  }

  private async fetchText(url: string, init: RequestInit & { signal?: AbortSignal }): Promise<{ response: Response; text: string }> {
    const timeout = new AbortController();
    const timer = setTimeout(() => timeout.abort(), this.timeoutMs);
    const abort = () => timeout.abort();
    init.signal?.addEventListener('abort', abort);
    try {
      const response = await this.fetchImpl(url, { ...init, signal: timeout.signal });
      return { response, text: await response.text() };
    } catch (error) {
      if (init.signal?.aborted) throw error;
      throw new FinbazeNetworkError(error instanceof Error ? error.message : String(error));
    } finally {
      clearTimeout(timer);
      init.signal?.removeEventListener('abort', abort);
    }
  }

  private async cached(fetchToken: () => Promise<{ access_token: string; expires_in: number }>): Promise<string> {
    if (this.tokenCache && this.tokenCache.expiresAt > Date.now() + REFRESH_MARGIN_MS) return this.tokenCache.accessToken;
    const token = await fetchToken();
    this.tokenCache = { accessToken: token.access_token, expiresAt: Date.now() + token.expires_in * 1000 };
    return token.access_token;
  }

  private async exchange(params: Record<string, string>): Promise<{ access_token: string; expires_in: number }> {
    const { response, text } = await this.fetchText(`${this.baseUrl}/v2/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'User-Agent': this.userAgent },
      body: JSON.stringify({ grant_type: 'client_credentials', ...params }),
    });
    if (!response.ok) {
      throw new FinbazeAuthenticationError(`Token exchange failed (HTTP ${response.status}): ${text}`, {
        requestId: response.headers.get('x-request-id') ?? undefined,
      });
    }
    let parsed: { access_token?: string; expires_in?: number };
    try {
      parsed = JSON.parse(text) as typeof parsed;
    } catch {
      throw new FinbazeAuthenticationError('Invalid token response');
    }
    if (!parsed.access_token || !parsed.expires_in) throw new FinbazeAuthenticationError('Invalid token response');
    return { access_token: parsed.access_token, expires_in: parsed.expires_in };
  }
}

/** Internal: a failed attempt that is worth repeating. */
class FinbazeNetworkError extends FinbazeError {
  constructor(message: string) {
    super(`Network error: ${message}`);
    this.name = 'FinbazeNetworkError';
  }
}

class FinbazeServiceUnavailableError extends FinbazeError {
  constructor(requestId?: string) {
    super('The API is temporarily unavailable (HTTP 503)', { requestId });
    this.name = 'FinbazeServiceUnavailableError';
  }
}
