import { QueryName, apiPaths } from 'main/config';
import { api } from 'infra/http';
import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';
import type { listQuery } from 'main/config';

export interface useFindQueryProps {
  page?: number;
  params?: object;
  id?: string;
}

interface queryProps extends useFindQueryProps {
  route: listQuery;
}

export const useFindQuery = <T>({ page, params, id, route }: queryProps): UseQueryResult<T> =>
  useQuery([QueryName[route], id, page, Object.values(params ?? {})], () =>
    api.get({
      id,
      queryParams: { limit: 10, page, ...params },
      route: apiPaths[route]
    })
  );
