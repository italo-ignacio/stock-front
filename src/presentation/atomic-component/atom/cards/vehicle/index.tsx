import { DeleteConfirmationModal } from 'presentation/atomic-component/molecule/modal/action-confirmation';
import { ListItemButton } from '@mui/material';
import { QueryName, apiPaths } from 'main/config';
import type { FC } from 'react';

interface VehicleCardProps {
  id: string;
  name: string;
}

export const VehicleCard: FC<VehicleCardProps> = ({ name, id }) => (
  <div className={'flex w-full rounded-md border-2 border-primary dark:bg-gray-800 dark:border-0'}>
    <ListItemButton>{name}</ListItemButton>

    <div className={'p-1'}>
      <DeleteConfirmationModal
        highlightedText={`${name}`}
        id={id}
        queryName={QueryName.vehicle}
        route={apiPaths.vehicle.all}
        successMessage={'Veículo deletado com sucesso'}
        text={'Tem certeza que deseja excluir o seguinte veículo ?'}
      />
    </div>
  </div>
);
