import { DriverModal } from 'presentation/atomic-component/molecule/modal';
import { DriverQuery } from 'presentation/atomic-component/organism';
import type { FC } from 'react';

export const MyDriversContent: FC = () => (
  <div>
    <div className={'flex items-center gap-4 p-4'}>
      <h2>Meus motoristas</h2>
      <DriverModal />
    </div>

    <div>
      <DriverQuery />
    </div>
  </div>
);
