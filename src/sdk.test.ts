import { toFinbazeList, withAutoPaging } from './pagination';
import { FinbazeHttpClient } from './http';
import { FinbazeGraphQLError, FinbazeAuthenticationError } from './errors';

describe('toFinbazeList', () => {
  it('maps connection edges and pageInfo', () => {
    const list = toFinbazeList({
      edges: [{ node: { id: '1' } }, { node: { id: '2' } }, null],
      pageInfo: { hasNextPage: true, endCursor: 'cursor-2' },
    });
    expect(list).toEqual({
      object: 'list',
      data: [{ id: '1' }, { id: '2' }],
      has_more: true,
      next_cursor: 'cursor-2',
    });
  });
});

describe('withAutoPaging', () => {
  it('iterates pages until has_more is false', async () => {
    const pages = [
      {
        object: 'list' as const,
        data: [{ id: '1' }],
        has_more: true,
        next_cursor: 'c1',
      },
      {
        object: 'list' as const,
        data: [{ id: '2' }],
        has_more: false,
        next_cursor: null,
      },
    ];
    const fetchNext = jest.fn(async () => pages[1]!);
    const list = withAutoPaging(pages[0]!, fetchNext);
    const ids: string[] = [];
    await list.autoPagingEach(async (item) => {
      ids.push(item.id);
    });
    expect(ids).toEqual(['1', '2']);
    expect(fetchNext).toHaveBeenCalledWith('c1');
  });
});

describe('FinbazeHttpClient', () => {
  it('throws GraphQL errors from the response body', async () => {
    const fetchMock = jest.fn(async () =>
      new Response(
        JSON.stringify({
          errors: [{ message: 'Nope', extensions: { code: 'FORBIDDEN' } }],
        }),
        { status: 200 },
      ),
    );

    const http = new FinbazeHttpClient({
      accessToken: 'tok',
      fetch: fetchMock as unknown as typeof fetch,
    });

    await expect(http.request('query { ping }')).rejects.toBeInstanceOf(
      FinbazeGraphQLError,
    );
    try {
      await http.request('query { ping }');
    } catch (err) {
      expect(err).toBeInstanceOf(FinbazeGraphQLError);
      expect((err as FinbazeGraphQLError).code).toBe('FORBIDDEN');
    }
  });

  it('exchanges client credentials when configured', async () => {
    const fetchMock = jest.fn(async (url: string) => {
      if (String(url).includes('/v2/oauth2/token')) {
        return new Response(
          JSON.stringify({ access_token: 'app-tok', expires_in: 3600 }),
          { status: 200 },
        );
      }
      return new Response(JSON.stringify({ data: { ok: true } }), {
        status: 200,
      });
    });

    const http = new FinbazeHttpClient({
      clientId: 'cid',
      clientSecret: 'sec',
      profileId: 'pid',
      fetch: fetchMock as unknown as typeof fetch,
    });

    const data = await http.request<{ ok: boolean }, undefined>(
      'query { ok }',
    );
    expect(data).toEqual({ ok: true });
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('/v2/oauth2/token'),
      expect.any(Object),
    );
  });

  it('requires auth config', () => {
    expect(() => new FinbazeHttpClient({})).toThrow(FinbazeAuthenticationError);
  });
});
