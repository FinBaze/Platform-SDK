import type { FinbazeHttpClient } from '../http.js';
import {
  toFinbazeList,
  withAutoPaging,
  type FinbazeList,
  type ListParams,
} from '../pagination.js';

export abstract class ProfileResource {
  constructor(protected readonly http: FinbazeHttpClient) {}

  protected profileFilter(profileId: string): { profileId: { eq: string } } {
    return { profileId: { eq: profileId } };
  }

  protected async listConnection<TNode, TFilter, TSort>(opts: {
    profileId: string;
    params: ListParams<TFilter, TSort> | undefined;
    fetchPage: (args: {
      first: number;
      after?: string;
      filter: TFilter & { profileId: { eq: string } };
      sorting?: TSort[];
    }) => Promise<{
      edges?: Array<{ node: TNode } | null> | null;
      pageInfo?: {
        hasNextPage?: boolean | null;
        endCursor?: string | null;
      } | null;
    }>;
  }): Promise<
    FinbazeList<TNode> & {
      autoPagingEach: (
        handler: (item: TNode) => void | Promise<void>,
      ) => Promise<void>;
      autoPagingToArray: (opts?: { limit?: number }) => Promise<TNode[]>;
    }
  > {
    const limit = opts.params?.limit ?? 25;
    const baseFilter = {
      ...(opts.params?.filter ?? ({} as TFilter)),
      ...this.profileFilter(opts.profileId),
    } as TFilter & { profileId: { eq: string } };

    const fetchPage = async (startingAfter?: string) => {
      const connection = await opts.fetchPage({
        first: limit,
        after: startingAfter ?? opts.params?.starting_after,
        filter: baseFilter,
        sorting: opts.params?.sorting,
      });
      return toFinbazeList(connection);
    };

    const first = await fetchPage();
    return withAutoPaging(first, (cursor) => fetchPage(cursor));
  }
}
