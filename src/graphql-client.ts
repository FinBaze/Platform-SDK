import type { TypedDocumentNode } from '@graphql-typed-document-node/core';
import type { DocumentNode } from 'graphql';

import type { FinbazeHttpClient } from './http.js';

export class GraphQLApi {
  constructor(private readonly http: FinbazeHttpClient) {}

  request<TData, TVars extends Record<string, unknown> | undefined = undefined>(
    document: string | DocumentNode | TypedDocumentNode<TData, TVars>,
    variables?: TVars,
    operationName?: string,
  ): Promise<TData> {
    return this.http.request(document, variables, operationName);
  }

  query<TData, TVars extends Record<string, unknown> | undefined = undefined>(
    document: string | DocumentNode | TypedDocumentNode<TData, TVars>,
    variables?: TVars,
    operationName?: string,
  ): Promise<TData> {
    return this.request(document, variables, operationName);
  }

  mutate<TData, TVars extends Record<string, unknown> | undefined = undefined>(
    document: string | DocumentNode | TypedDocumentNode<TData, TVars>,
    variables?: TVars,
    operationName?: string,
  ): Promise<TData> {
    return this.request(document, variables, operationName);
  }
}
