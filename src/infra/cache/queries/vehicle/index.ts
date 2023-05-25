import { QueryName, apiPaths } from 'main/config';
import { api } from 'infra/http';
import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';
import type { VehicleFleetResponse } from 'domain/models/vehicle-fleet';

interface useFindVehicleQueryProps {
  page: number;
  search?: string;
}

export const useFindVehicleQuery = ({
  page,
  search
}: useFindVehicleQueryProps): UseQueryResult<{ payload: VehicleFleetResponse[] }> =>
  useQuery([QueryName.vehicle, page, search], () =>
    api.get({
      queryParams: { limit: 10, page, search },
      route: apiPaths.vehicle.all
    })
  );
