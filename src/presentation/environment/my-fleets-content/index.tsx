import { FleetModal } from 'presentation/atomic-component/molecule/modal';
import { FleetQuery } from 'presentation/atomic-component/organism';
import type { FC } from 'react';

export const MyFleetsContent: FC = () => (
  <div>
    <div className={'flex items-center gap-4 p-4'}>
      <h2>Minhas Frotas</h2>
      <FleetModal />
    </div>

    <div>
      <FleetQuery />
    </div>
  </div>
);
