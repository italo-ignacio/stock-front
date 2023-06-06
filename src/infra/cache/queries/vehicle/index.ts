import { useFindQuery } from 'infra/cache/queries/default-query';
import type { FindVehicleResponse, Vehicle } from 'domain/models';
import type { UseQueryResult } from 'react-query';
import type { useFindQueryProps } from 'infra/cache/queries/default-query';

export const useFindVehicleQuery = ({
  ...props
}: useFindQueryProps): UseQueryResult<FindVehicleResponse> =>
  useFindQuery<FindVehicleResponse>({ ...props, route: 'vehicle' });

export const useFindOneVehicleQuery = ({ ...props }: useFindQueryProps): UseQueryResult<Vehicle> =>
  useFindQuery<Vehicle>({ ...props, route: 'vehicle' });
