import { DeleteConfirmationModal } from 'presentation/atomic-component/molecule/modal/action-confirmation';
import { ListItemButton } from '@mui/material';
import { QueryName, apiPaths } from 'main/config';
import type { Driver } from 'domain/models';
import type { FC } from 'react';

interface DriverCardProps extends Driver {
  remove?: boolean;
}
export const DriverCard: FC<DriverCardProps> = ({ ...props }) => (
  <div className={'flex w-full rounded-md border-2 border-primary dark:bg-gray-800 dark:border-0'}>
    <ListItemButton>{props.name}</ListItemButton>

    <div className={'p-1'}>
      <DeleteConfirmationModal
        id={props.id}
        isPatch
        queryName={QueryName.driver}
        route={apiPaths.disableDriver}
        successMessage={'Motorista desativado com sucesso'}
        text={
          <p>
            Deseja desativar o/a motorista <strong>{props.name}</strong> do sistema ?
          </p>
        }
      />
    </div>
  </div>
);
