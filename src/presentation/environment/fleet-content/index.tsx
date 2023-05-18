import { VehicleModal } from 'presentation/atomic-component/molecule/modal';
import { VehicleQuery } from 'presentation/atomic-component/organism';
import type { FC } from 'react';

export const FleetContent: FC = () => (
  <div>
    <div className={'flex items-center gap-4 p-4'}>
      <h2>Veículos da frota</h2>
      <VehicleModal />
    </div>

    <div>
      <VehicleQuery />
    </div>
  </div>
);
