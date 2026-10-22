import { FinbazeAuthenticationError } from './errors.js';
import { LIVE_BASE_URL } from './http.js';

export type OAuthTokens = {
  access_token: string;
  expires_in: number;
  token_type?: string;
  refresh_token?: string;
  scope?: string;
};

type OAuthOptions = {
  baseUrl?: string;
  clientId: string;
  /** Public (PKCE) apps have no secret. */
  clientSecret?: string;
  fetch?: typeof fetch;
};

const encoder = new TextEncoder();

function base64url(bytes: Uint8Array): string {
  let binary = '';
  for (const b of bytes) binary += String.fromCharCode(b);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

type CryptoLike = { getRandomValues(a: Uint8Array): Uint8Array; subtle: { digest(alg: string, data: Uint8Array): Promise<ArrayBuffer> } };

function cryptoLike(): CryptoLike {
  const c = (globalThis as { crypto?: CryptoLike }).crypto;
  if (!c?.subtle) throw new FinbazeAuthenticationError('WebCrypto (crypto.subtle) is not available in this runtime.');
  return c;
}

/** A PKCE pair: send `challenge` to the authorize URL, keep `verifier` for the token exchange. */
export async function generatePkce(): Promise<{ verifier: string; challenge: string; method: 'S256' }> {
  const c = cryptoLike();
  const verifier = base64url(c.getRandomValues(new Uint8Array(32)));
  const challenge = base64url(new Uint8Array(await c.subtle.digest('SHA-256', encoder.encode(verifier))));
  return { verifier, challenge, method: 'S256' };
}

/** Reads the claims of an access token (no verification: for expiry and `profile_id` only). */
export function decodeAccessToken(accessToken: string): { profile_id?: string; scope?: string; exp?: number; [key: string]: unknown } {
  const payload = accessToken.split('.')[1];
  if (!payload) return {};
  const padded = payload.replace(/-/g, '+').replace(/_/g, '/');
  try {
    return JSON.parse(atob(padded.padEnd(Math.ceil(padded.length / 4) * 4, '='))) as Record<string, unknown>;
  } catch {
    return {};
  }
}

/** The authorization-code flow for marketplace apps, as `Finbaze.oauth`. */
export class OAuth {
  private readonly baseUrl: string;
  private readonly fetchImpl: typeof fetch;

  constructor(private readonly options: OAuthOptions) {
    this.baseUrl = (options.baseUrl ?? LIVE_BASE_URL).replace(/\/$/, '');
    this.fetchImpl = options.fetch ?? globalThis.fetch.bind(globalThis);
  }

  /** The URL to send the user to. `webBaseUrl` is where the authorize screen lives (the FinBaze web app). */
  authorizeUrl(params: { webBaseUrl: string; redirectUri: string; scopes?: string[]; state?: string; codeChallenge?: string; profileId?: string }): string {
    const url = new URL('/oauth/authorize', params.webBaseUrl);
    url.searchParams.set('response_type', 'code');
    url.searchParams.set('client_id', this.options.clientId);
    url.searchParams.set('redirect_uri', params.redirectUri);
    if (params.scopes?.length) url.searchParams.set('scope', params.scopes.join(' '));
    if (params.state) url.searchParams.set('state', params.state);
    if (params.codeChallenge) {
      url.searchParams.set('code_challenge', params.codeChallenge);
      url.searchParams.set('code_challenge_method', 'S256');
    }
    if (params.profileId) url.searchParams.set('profile_id', params.profileId);
    return url.toString();
  }

  exchangeCode(params: { code: string; redirectUri: string; codeVerifier?: string }): Promise<OAuthTokens> {
    return this.token({
      grant_type: 'authorization_code',
      code: params.code,
      redirect_uri: params.redirectUri,
      ...(params.codeVerifier ? { code_verifier: params.codeVerifier } : {}),
    });
  }

  refresh(refreshToken: string): Promise<OAuthTokens> {
    return this.token({ grant_type: 'refresh_token', refresh_token: refreshToken });
  }

  private async token(body: Record<string, string>): Promise<OAuthTokens> {
    const response = await this.fetchImpl(`${this.baseUrl}/v2/oauth2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...body,
        client_id: this.options.clientId,
        ...(this.options.clientSecret ? { client_secret: this.options.clientSecret } : {}),
      }),
    });
    const text = await response.text();
    if (!response.ok) throw new FinbazeAuthenticationError(`OAuth token request failed (HTTP ${response.status}): ${text}`);
    let parsed: OAuthTokens;
    try {
      parsed = JSON.parse(text) as OAuthTokens;
    } catch {
      throw new FinbazeAuthenticationError('Invalid token response');
    }
    if (!parsed.access_token) throw new FinbazeAuthenticationError('Invalid token response');
    return parsed;
  }
}
