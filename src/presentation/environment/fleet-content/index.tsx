import { VehicleModal } from 'presentation/atomic-component/molecule/modal';
import { VehicleQuery } from 'presentation/atomic-component/organism';
import { useParams } from 'react-router-dom';
import type { FC } from 'react';

export const FleetContent: FC = () => {
  const { fleetId } = useParams() as { fleetId: string };

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
