import { useFindQuery } from 'infra/cache/queries/default-query';
import type { Driver, FindDriverResponse } from 'domain/models';
import type { UseQueryResult } from 'react-query';
import type { useFindQueryProps } from 'infra/cache/queries/default-query';

export const useFindDriverQuery = ({
  ...props
}: useFindQueryProps): UseQueryResult<FindDriverResponse> =>
  useFindQuery<FindDriverResponse>({ ...props, route: 'driver' });

export const useFindOneDriverQuery = ({ ...props }: useFindQueryProps): UseQueryResult<Driver> =>
  useFindQuery<Driver>({ ...props, route: 'driver' });
