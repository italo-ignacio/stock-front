import { QueryName, apiPaths } from 'main/config';
import { api } from 'infra/http';
import { useQuery } from 'react-query';
import type { FindVehicleResponse } from 'domain/models';
import type { UseQueryResult } from 'react-query';

interface useFindVehicleQueryProps {
  page: number;
  search?: string;
}

export const useFindVehicleQuery = ({
  page,
  search
}: useFindVehicleQueryProps): UseQueryResult<FindVehicleResponse> =>
  useQuery([QueryName.vehicle, page, search], () =>
    api.get({
      queryParams: { limit: 10, page, search },
      route: apiPaths.vehicle.all
    })
  );
