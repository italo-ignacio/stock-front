import { useFindVehicleQuery } from 'infra/cache';
import type { FC } from 'react';

interface WorkQueryProps {
  vehicleId: string;
}
export const WorkQuery: FC<WorkQueryProps> = ({ vehicleId }) => {
  useFindVehicleQuery({
    page: 1
  });

  return <div>{vehicleId}</div>;
};
