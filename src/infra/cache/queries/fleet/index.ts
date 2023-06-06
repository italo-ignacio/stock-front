import { useFindQuery } from 'infra/cache/queries/default-query';
import type { FindFleetResponse } from 'domain/models';
import type { UseQueryResult } from 'react-query';
import type { useFindQueryProps } from 'infra/cache/queries/default-query';

export const useFindFleetQuery = ({
  ...props
}: useFindQueryProps): UseQueryResult<FindFleetResponse> =>
  useFindQuery<FindFleetResponse>({ ...props, route: 'fleet' });

export const useFindOneFleetQuery = ({
  ...props
}: useFindQueryProps): UseQueryResult<FindFleetResponse> =>
  useFindQuery<FindFleetResponse>({ ...props, route: 'fleet' });
