import { QueryManager, VehicleCard } from 'presentation/atomic-component/atom';
import { useFindVehicleQuery } from 'infra/cache';
import type { FC } from 'react';

interface VehicleQueryProps {
  fleetId: string;
}
export const VehicleQuery: FC<VehicleQueryProps> = ({ fleetId }) => {
  const vehicleQuery = useFindVehicleQuery({
    page: 1
  });

  return (
    <div>
      <QueryManager query={vehicleQuery}>
        <div className={'flex flex-wrap gap-2'}>
          {vehicleQuery.data?.payload.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} fleetId={fleetId} />
          ))}
        </div>
      </QueryManager>
    </div>
  );
};
