import { FinbazeSignatureVerificationError } from './errors.js';

export type WebhookEvent<TType extends string = string, TData = Record<string, unknown>> = {
  /** Delivery id. */
  id: string;
  event: TType;
  /** Same for every retry and endpoint: dedupe on this. */
  eventId: string;
  /** Outbox sequence (bigint as a string); null for pings. */
  sequence?: string | null;
  occurredAt?: string;
  created: string;
  appId?: string;
  platformId?: string;
  profileId?: string;
  entityId?: string;
  data: TData;
};

/** The envelope of a platform webhook (`Finbaze.webhooks.constructPlatformEvent`). */
export type PlatformWebhookEvent<TType extends string = string, TData = Record<string, unknown>> = {
  /** `evt_…`: the same for every retry and endpoint. Dedupe on this. */
  id: string;
  object: 'event';
  type: TType;
  apiVersion: string;
  created: string;
  occurredAt: string;
  /** Ordered per platform; the same number the events API pages by. */
  sequence: string;
  livemode: boolean;
  platform: string;
  company: { id: string; externalId: string | null } | null;
  request: { id: string } | null;
  /** `object` is the snapshot taken when the event was recorded; `details` carries event specifics. */
  data: TData & { object?: Record<string, unknown>; details?: Record<string, unknown> };
};

const DEFAULT_TOLERANCE_SECONDS = 300;
const encoder = new TextEncoder();

type Subtle = {
  importKey(format: 'raw', key: Uint8Array, algorithm: { name: string; hash: string }, extractable: boolean, usages: string[]): Promise<unknown>;
  sign(algorithm: string, key: unknown, data: Uint8Array): Promise<ArrayBuffer>;
};

function subtle(): Subtle {
  const crypto = (globalThis as { crypto?: { subtle?: Subtle } }).crypto;
  if (!crypto?.subtle) throw new FinbazeSignatureVerificationError('WebCrypto (crypto.subtle) is not available in this runtime.');
  return crypto.subtle;
}

function hex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer), (b) => b.toString(16).padStart(2, '0')).join('');
}

async function hmacHex(secret: string, message: string): Promise<string> {
  const s = subtle();
  const key = await s.importKey('raw', encoder.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  return hex(await s.sign('HMAC', key, encoder.encode(message)));
}

/** Constant-time comparison of two hex strings. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i += 1) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function text(rawBody: string | Uint8Array): string {
  return typeof rawBody === 'string' ? rawBody : new TextDecoder().decode(rawBody);
}

export class Webhooks {
  /**
   * Verifies `X-FinBaze-Signature` (`t=<unix seconds>,v1=<hex HMAC-SHA256 of "<t>.<raw body>">`) and returns the event.
   * Pass the body exactly as received (before any JSON parsing). Async because WebCrypto is; Stripe's equivalent is sync.
   */
  async constructEvent(
    rawBody: string | Uint8Array,
    signatureHeader: string,
    secret: string | string[],
    opts: { toleranceSeconds?: number; nowSeconds?: number } = {},
  ): Promise<WebhookEvent> {
    return this.verified<WebhookEvent>(rawBody, signatureHeader, secret, opts);
  }

  /**
   * The same check for a platform webhook endpoint. While you rotate a secret, pass the new and the old one
   * (`[next, previous]`): the header then carries a signature per secret and either verifies.
   */
  async constructPlatformEvent<TType extends string = string, TData = Record<string, unknown>>(
    rawBody: string | Uint8Array,
    signatureHeader: string,
    secret: string | string[],
    opts: { toleranceSeconds?: number; nowSeconds?: number } = {},
  ): Promise<PlatformWebhookEvent<TType, TData>> {
    return this.verified<PlatformWebhookEvent<TType, TData>>(rawBody, signatureHeader, secret, opts);
  }

  private async verified<T>(
    rawBody: string | Uint8Array,
    signatureHeader: string,
    secret: string | string[],
    opts: { toleranceSeconds?: number; nowSeconds?: number },
  ): Promise<T> {
    const body = text(rawBody);
    // During a secret rotation the header carries one `v1` per live secret.
    const v1s: string[] = [];
    let timestamp: string | undefined;
    for (const part of (signatureHeader ?? '').split(',')) {
      const [k, ...rest] = part.trim().split('=');
      if (k === 't') timestamp = rest.join('=');
      else if (k === 'v1') v1s.push(rest.join('='));
    }
    const t = Number(timestamp);
    if (!Number.isFinite(t) || v1s.length === 0) throw new FinbazeSignatureVerificationError('The signature header is malformed.');

    const now = opts.nowSeconds ?? Math.floor(Date.now() / 1000);
    if (Math.abs(now - t) > (opts.toleranceSeconds ?? DEFAULT_TOLERANCE_SECONDS)) {
      throw new FinbazeSignatureVerificationError('The timestamp is outside the tolerance window.');
    }
    const secrets = Array.isArray(secret) ? secret : [secret];
    let matched = false;
    for (const candidate of secrets) {
      const expected = await hmacHex(candidate, `${t}.${body}`);
      if (v1s.some((v1) => safeEqual(expected, v1))) matched = true;
    }
    if (!matched) {
      throw new FinbazeSignatureVerificationError('The signature does not match the payload.');
    }
    try {
      return JSON.parse(body) as T;
    } catch {
      throw new FinbazeSignatureVerificationError('The payload is not valid JSON.');
    }
  }

  /** A valid header for `payload`, for your own tests. */
  async generateTestHeader(opts: { payload: string; secret: string; timestamp?: number }): Promise<string> {
    const t = opts.timestamp ?? Math.floor(Date.now() / 1000);
    return `t=${t},v1=${await hmacHex(opts.secret, `${t}.${opts.payload}`)}`;
  }
}
