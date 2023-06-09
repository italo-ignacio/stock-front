import { useFindQuery } from 'infra/cache/queries/default-query';
import type { FindStartLocationResponse } from 'domain/models';
import type { UseQueryResult } from 'react-query';
import type { useFindQueryProps } from 'infra/cache/queries/default-query';

export const useFindStartLocationsQuery = ({
  ...props
}: useFindQueryProps): UseQueryResult<FindStartLocationResponse> =>
  useFindQuery<FindStartLocationResponse>({ ...props, route: 'startLocations' });
