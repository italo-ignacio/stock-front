import { QueryName, apiPaths } from 'main/config';
import { api } from 'infra/http';
import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';
import type { VehicleFleetResponse } from 'domain/models/vehicle-fleet';

interface useFindVehicleFleetQueryProps {
  page: number;
  search?: string;
}

export const useFindVehicleFleetQuery = ({
  page,
  search
}: useFindVehicleFleetQueryProps): UseQueryResult<{ payload: VehicleFleetResponse[] }> =>
  useQuery([QueryName.vehicleFleet, page, search], () =>
    api.get({
      queryParams: { limit: 10, page, search },
      route: apiPaths.vehicleFleet
    })
  );
