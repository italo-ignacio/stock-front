import { useFindVehicleQuery } from 'infra/cache';
import type { FC } from 'react';

interface CostQueryProps {
  vehicleId: string;
}
export const CostQuery: FC<CostQueryProps> = ({ vehicleId }) => {
  useFindVehicleQuery({
    page: 1
  });

  return <div>{vehicleId}</div>;
};
