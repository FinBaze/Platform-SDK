export type FinbazeList<T> = {
  object: 'list';
  data: T[];
  has_more: boolean;
  next_cursor: string | null;
};

export type ListParams<TFilter = Record<string, unknown>, TSort = unknown> = {
  limit?: number;
  starting_after?: string;
  ending_before?: string;
  filter?: TFilter;
  sorting?: TSort[];
};

export type ConnectionLike<T> = {
  edges?: Array<{ node: T } | null> | null;
  pageInfo?: {
    hasNextPage?: boolean | null;
    endCursor?: string | null;
  } | null;
};

export function toFinbazeList<T>(connection: ConnectionLike<T>): FinbazeList<T> {
  const data = (connection.edges ?? [])
    .map((edge) => edge?.node)
    .filter((node): node is T => node != null);

  return {
    object: 'list',
    data,
    has_more: Boolean(connection.pageInfo?.hasNextPage),
    next_cursor: connection.pageInfo?.endCursor ?? null,
  };
}

export function withAutoPaging<T>(
  list: FinbazeList<T>,
  fetchNext: (cursor: string) => Promise<FinbazeList<T>>,
): FinbazeList<T> & {
  autoPagingEach: (
    handler: (item: T) => void | Promise<void>,
  ) => Promise<void>;
  autoPagingToArray: (opts?: { limit?: number }) => Promise<T[]>;
} {
  return {
    ...list,
    async autoPagingEach(handler) {
      let page = list;
      for (;;) {
        for (const item of page.data) {
          await handler(item);
        }
        if (!page.has_more || !page.next_cursor) {
          return;
        }
        page = await fetchNext(page.next_cursor);
      }
    },
    async autoPagingToArray(opts) {
      const limit = opts?.limit ?? Number.POSITIVE_INFINITY;
      const out: T[] = [];
      await this.autoPagingEach(async (item) => {
        if (out.length >= limit) return;
        out.push(item);
      });
      return out.slice(0, limit === Number.POSITIVE_INFINITY ? undefined : limit);
    },
  };
}
