import { VehicleFleetModal } from 'presentation/atomic-component/molecule/modal';
import { VehicleFleetQuery } from 'presentation/atomic-component/organism';
import type { FC } from 'react';

export const MyFleetsContent: FC = () => (
  <div>
    <div className={'flex items-center gap-4 p-4'}>
      <h2>Minhas Frotas</h2>
      <VehicleFleetModal />
    </div>

    <div>
      <VehicleFleetQuery />
    </div>
  </div>
);
