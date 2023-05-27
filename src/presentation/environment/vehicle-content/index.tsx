import { VehicleModal } from 'presentation/atomic-component/molecule/modal';
import { VehicleQuery } from 'presentation/atomic-component/organism';
import { useParams } from 'react-router-dom';
import type { FC } from 'react';

export const VehicleContent: FC = () => {
  const { fleetId, vehicleId } = useParams() as { fleetId: string; vehicleId: string };

  console.log(vehicleId);

  return (
    <div>
      <div className={'flex items-center gap-4 p-4'}>
        <h2>Veículos</h2>
        <VehicleModal fleetId={fleetId} />
      </div>

      <div>
        <VehicleQuery />
      </div>
    </div>
  );
};
