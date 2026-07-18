import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import { print } from 'graphql';
import type { DocumentNode } from 'graphql';

import {
  FinbazeAuthenticationError,
  FinbazeError,
  FinbazeGraphQLError,
  type FinbazeGraphQLErrorDetail,
} from './errors.js';

export type FinbazeClientConfig = {
  baseUrl?: string;
  accessToken?: string;
  clientId?: string;
  clientSecret?: string;
  profileId?: string;
  fetch?: typeof fetch;
};

type TokenCache = {
  accessToken: string;
  expiresAt: number;
};

type GraphQLResponse<TData> = {
  data?: TData;
  errors?: FinbazeGraphQLErrorDetail[];
};

const DEFAULT_BASE_URL = 'https://api.platform.finbaze.com';

export class FinbazeHttpClient {
  readonly baseUrl: string;
  private readonly staticAccessToken?: string;
  private readonly clientId?: string;
  private readonly clientSecret?: string;
  private readonly profileId?: string;
  private readonly fetchImpl: typeof fetch;
  private tokenCache: TokenCache | null = null;

  constructor(config: FinbazeClientConfig = {}) {
    this.baseUrl = (config.baseUrl ?? DEFAULT_BASE_URL).replace(/\/$/, '');
    this.staticAccessToken = config.accessToken;
    this.clientId = config.clientId;
    this.clientSecret = config.clientSecret;
    this.profileId = config.profileId;
    this.fetchImpl = config.fetch ?? globalThis.fetch.bind(globalThis);

    if (!this.fetchImpl) {
      throw new FinbazeError(
        'fetch is not available. Pass config.fetch or use Node 18+ / a modern browser.',
      );
    }

    if (
      !this.staticAccessToken &&
      !(this.clientId && this.clientSecret && this.profileId)
    ) {
      throw new FinbazeAuthenticationError(
        'Provide accessToken, or clientId + clientSecret + profileId.',
      );
    }
  }

  async request<TData, TVars extends Record<string, unknown> | undefined>(
    document: string | DocumentNode | TypedDocumentNode<TData, TVars>,
    variables?: TVars,
    operationName?: string,
  ): Promise<TData> {
    const accessToken = await this.resolveAccessToken();
    const query =
      typeof document === 'string' ? document : print(document as DocumentNode);

    const response = await this.fetchImpl(`${this.baseUrl}/graphql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        query,
        ...(variables ? { variables } : {}),
        ...(operationName ? { operationName } : {}),
      }),
    });

    const text = await response.text();
    let parsed: GraphQLResponse<TData> | undefined;
    try {
      parsed = text.length > 0 ? (JSON.parse(text) as GraphQLResponse<TData>) : undefined;
    } catch {
      throw new FinbazeError(
        `GraphQL response was not JSON (HTTP ${response.status})`,
      );
    }

    if (parsed?.errors?.length) {
      throw new FinbazeGraphQLError(parsed.errors, response.status);
    }

    if (!response.ok) {
      throw new FinbazeError(`GraphQL request failed with HTTP ${response.status}`);
    }

    if (!parsed?.data) {
      throw new FinbazeError('GraphQL response contained no data');
    }

    return parsed.data;
  }

  private async resolveAccessToken(): Promise<string> {
    if (this.staticAccessToken) {
      return this.staticAccessToken;
    }

    if (
      this.tokenCache &&
      this.tokenCache.expiresAt > Date.now() + 30_000
    ) {
      return this.tokenCache.accessToken;
    }

    const token = await this.exchangeClientCredentials();
    this.tokenCache = {
      accessToken: token.access_token,
      expiresAt: Date.now() + token.expires_in * 1000,
    };
    return token.access_token;
  }

  private async exchangeClientCredentials(): Promise<{
    access_token: string;
    expires_in: number;
  }> {
    const response = await this.fetchImpl(`${this.baseUrl}/v2/oauth2/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        grant_type: 'client_credentials',
        client_id: this.clientId,
        client_secret: this.clientSecret,
        profile_id: this.profileId,
      }),
    });

    const text = await response.text();
    if (!response.ok) {
      throw new FinbazeAuthenticationError(
        `Token exchange failed (HTTP ${response.status}): ${text}`,
      );
    }

    const parsed = JSON.parse(text) as {
      access_token: string;
      expires_in: number;
    };
    if (!parsed.access_token || !parsed.expires_in) {
      throw new FinbazeAuthenticationError('Invalid token response');
    }
    return parsed;
  }
}
