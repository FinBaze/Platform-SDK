import { GraphQLApi } from './graphql-client.js';
import { FinbazeHttpClient, type FinbazeClientConfig } from './http.js';
import { OAuth } from './oauth.js';
import { BookkeepersResource } from './resources/bookkeepers/index.js';
import { CompaniesResource } from './resources/companies/index.js';
import { PlatformNamespace } from './resources/platform/index.js';
import { Webhooks } from './webhooks.js';

const USER_TOKEN_MARGIN_MS = 60_000;

export type AsUserTarget = { platformUserId: string } | { externalUserId: string };

export class Finbaze {
  /** Companies, users, tokens, embed sessions, features, usage and origins of your platform. */
  readonly platform: PlatformNamespace;
  /** Company-scoped resources (invoices, bank, documents, tax). */
  readonly companies: CompaniesResource;
  /** The 0.x name for `companies`. */
  readonly profiles: CompaniesResource;
  readonly bookkeepers: BookkeepersResource;
  readonly webhooks: Webhooks;
  readonly graphql: GraphQLApi;

  private readonly http: FinbazeHttpClient;

  constructor(config: FinbazeClientConfig = {}) {
    this.http = new FinbazeHttpClient(config);
    this.platform = new PlatformNamespace(this.http);
    this.companies = new CompaniesResource(this.http);
    this.profiles = this.companies;
    this.bookkeepers = new BookkeepersResource(this.http);
    this.webhooks = new Webhooks();
    this.graphql = new GraphQLApi(this.http);
  }

  /**
   * A client that acts as one platform user. A user token is minted on demand,
   * cached until a minute before it expires, and replaced when it lapses.
   */
  asUser(user: AsUserTarget, opts: { companyIds?: string[]; scopes?: string[] } = {}): Finbaze {
    let cached: { token: string; expiresAt: number } | null = null;
    let pending: Promise<string> | null = null;
    const provider = async () => {
      if (cached && cached.expiresAt - USER_TOKEN_MARGIN_MS > Date.now()) return cached.token;
      pending ??= this.platform.userTokens
        .create({
          ...('platformUserId' in user ? { userId: user.platformUserId } : { externalUserId: user.externalUserId }),
          companyIds: opts.companyIds,
          scopes: opts.scopes,
        })
        .then((minted) => {
          cached = { token: minted.accessToken, expiresAt: new Date(minted.expiresAt).getTime() };
          return minted.accessToken;
        })
        .finally(() => {
          pending = null;
        });
      return pending;
    };
    return Finbaze.fromHttp(this.http.withTokenProvider(provider));
  }

  /** OAuth helpers for marketplace apps (authorization code + PKCE, refresh). */
  static oauth(options: { clientId: string; clientSecret?: string; baseUrl?: string; fetch?: typeof fetch }): OAuth {
    return new OAuth(options);
  }

  private static fromHttp(http: FinbazeHttpClient): Finbaze {
    const client = Object.create(Finbaze.prototype) as { -readonly [K in keyof Finbaze]: Finbaze[K] } & { http: FinbazeHttpClient };
    client.http = http;
    client.platform = new PlatformNamespace(http);
    client.companies = new CompaniesResource(http);
    client.profiles = client.companies;
    client.bookkeepers = new BookkeepersResource(http);
    client.webhooks = new Webhooks();
    client.graphql = new GraphQLApi(http);
    return client as unknown as Finbaze;
  }
}

export default Finbaze;
