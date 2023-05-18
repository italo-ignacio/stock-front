import { VehicleFleetCard } from 'presentation/atomic-component/atom';
import { useFindVehicleFleetQuery } from 'infra/cache';
import type { FC } from 'react';

export const VehicleFleetQuery: FC = () => {
  const query = useFindVehicleFleetQuery({
    page: 1
  });

  return (
    <div>
      {query.isSuccess ? (
        <div className={'flex flex-wrap gap-2'}>
          {query.data.payload.map((vehicleFleet) => (
            <VehicleFleetCard key={vehicleFleet.id} id={vehicleFleet.id} name={vehicleFleet.name} />
          ))}
        </div>
      ) : null}
    </div>
  );
};
