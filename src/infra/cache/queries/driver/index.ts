import { QueryName, apiPaths } from 'main/config';
import { api } from 'infra/http';
import { useQuery } from 'react-query';
import type { UseQueryResult } from 'react-query';
import type { VehicleFleetResponse } from 'domain/models/vehicle-fleet';

interface useFindDriverQueryProps {
  page: number;
  search?: string;
}

export const useFindDriverQuery = ({
  page,
  search
}: useFindDriverQueryProps): UseQueryResult<VehicleFleetResponse> =>
  useQuery([QueryName.driver, page, search], () =>
    api.get({
      queryParams: { limit: 10, page, search },
      route: apiPaths.driver.all
    })
  );
