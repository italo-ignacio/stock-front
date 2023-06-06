import { useFindQuery } from 'infra/cache/queries/default-query';
import type { FindWorkResponse } from 'domain/models';
import type { UseQueryResult } from 'react-query';
import type { useFindQueryProps } from 'infra/cache/queries/default-query';

export const useFindWorkQuery = ({
  ...props
}: useFindQueryProps): UseQueryResult<FindWorkResponse> =>
  useFindQuery<FindWorkResponse>({ ...props, route: 'work' });
