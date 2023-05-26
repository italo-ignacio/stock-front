import { QueryManager, VehicleFleetCard } from 'presentation/atomic-component/atom';
import { useFindVehicleFleetQuery } from 'infra/cache';
import type { FC } from 'react';

export const VehicleFleetQuery: FC = () => {
  const vehicleFleetQuery = useFindVehicleFleetQuery({
    page: 1
  });

  return (
    <QueryManager query={vehicleFleetQuery}>
      <div className={'flex flex-wrap gap-2'}>
        {vehicleFleetQuery.data?.payload.map((vehicleFleet) => (
          <VehicleFleetCard key={vehicleFleet.id} id={vehicleFleet.id} name={vehicleFleet.name} />
        ))}
      </div>
    </QueryManager>
  );
};
