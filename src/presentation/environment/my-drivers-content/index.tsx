import { Add } from '@mui/icons-material';
import { DriverModal } from 'presentation/atomic-component/molecule/modal/driver';
import { DriverQuery } from 'presentation/atomic-component/organism';
import { IconButton } from '@mui/material';
import type { FC } from 'react';

export const MyDriversContent: FC = () => (
  <div>
    <div className={'flex items-center gap-4 p-4'}>
      <h2>Meus motoristas</h2>

      <DriverModal
        openElement={
          <IconButton>
            <Add className={'text-primary dark:text-white'} />
          </IconButton>
        }
      />
    </div>

    <div>
      <DriverQuery />
    </div>
  </div>
);
