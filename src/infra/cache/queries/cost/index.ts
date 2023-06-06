import { useFindQuery } from 'infra/cache/queries/default-query';
import type { Cost, FindCostResponse } from 'domain/models';
import type { UseQueryResult } from 'react-query';
import type { useFindQueryProps } from 'infra/cache/queries/default-query';

export const useFindCostQuery = ({
  ...props
}: useFindQueryProps): UseQueryResult<FindCostResponse> =>
  useFindQuery<FindCostResponse>({ ...props, route: 'cost' });

export const useFindOneCostQuery = ({ ...props }: useFindQueryProps): UseQueryResult<Cost> =>
  useFindQuery<Cost>({ ...props, route: 'cost' });
