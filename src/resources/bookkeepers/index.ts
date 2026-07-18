import {
  SdkBookkeeperApiCredentialsDocument,
  SdkCreateBookkeeperApiCredentialDocument,
  SdkRevokeBookkeeperApiCredentialDocument,
  SdkRotateBookkeeperApiCredentialDocument,
} from '../../generated/graphql.js';
import type { FinbazeHttpClient } from '../../http.js';

export class BookkeeperApiCredentialsResource {
  constructor(private readonly http: FinbazeHttpClient) {}

  async list(bookkeeperId: string) {
    const data = await this.http.request(SdkBookkeeperApiCredentialsDocument, {
      bookkeeperId,
    });
    return data.bookkeeperApiCredentials;
  }

  async create(bookkeeperId: string, params?: { name?: string }) {
    const data = await this.http.request(
      SdkCreateBookkeeperApiCredentialDocument,
      {
        bookkeeperId,
        input: params?.name ? { name: params.name } : undefined,
      },
    );
    return data.createBookkeeperApiCredential;
  }

  async rotate(bookkeeperId: string, id: string) {
    const data = await this.http.request(
      SdkRotateBookkeeperApiCredentialDocument,
      { bookkeeperId, id },
    );
    return data.rotateBookkeeperApiCredential;
  }

  async del(bookkeeperId: string, id: string) {
    const data = await this.http.request(
      SdkRevokeBookkeeperApiCredentialDocument,
      { bookkeeperId, id },
    );
    return data.revokeBookkeeperApiCredential;
  }
}

export class BookkeepersResource {
  readonly apiCredentials: BookkeeperApiCredentialsResource;

  constructor(http: FinbazeHttpClient) {
    this.apiCredentials = new BookkeeperApiCredentialsResource(http);
  }
}
