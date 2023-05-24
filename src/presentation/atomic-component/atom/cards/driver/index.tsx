import { DeleteConfirmationModal } from 'presentation/atomic-component/molecule/modal/action-confirmation';
import { ListItemButton } from '@mui/material';
import { QueryName, apiPaths } from 'main/config';
import type { FC } from 'react';

interface DriverCardProps {
  id: string;
  name: string;
}

export const DriverCard: FC<DriverCardProps> = ({ name, id }) => (
  <div className={'flex w-full rounded-md border-2 border-primary dark:bg-gray-800 dark:border-0'}>
    <ListItemButton>{name}</ListItemButton>

    <div className={'p-1'}>
      <DeleteConfirmationModal
        id={id}
        isPatch
        queryName={QueryName.driver}
        route={apiPaths.driver.disable}
        successMessage={'Motorista desativado com sucesso'}
        text={
          <p>
            Deseja desativar o/a motorista <strong>{name}</strong> do sistema ?
          </p>
        }
      />
    </div>
  </div>
);
