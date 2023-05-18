import { DeleteConfirmationModal } from 'presentation/atomic-component/molecule/modal/action-confirmation';
import { ListItemButton } from '@mui/material';
import { QueryName, apiPaths, paths } from 'main/config';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

interface VehicleFleetCardProps {
  id: string;
  name: string;
}

export const VehicleFleetCard: FC<VehicleFleetCardProps> = ({ name, id }) => {
  const navigate = useNavigate();

  return (
    <div
      className={'flex w-full rounded-md border-2 border-primary dark:bg-gray-800 dark:border-0'}
    >
      <ListItemButton
        onClick={(): void => {
          navigate(paths.fleet(id));
        }}
      >
        {name}
      </ListItemButton>

      <div className={'p-1'}>
        <DeleteConfirmationModal
          highlightedText={name}
          id={id}
          queryName={QueryName.vehicleFleet}
          route={apiPaths.vehicleFleet}
          successMessage={'Frota deletado com sucesso'}
          text={'Tem certeza que deseja excluir a frota'}
        />
      </div>
    </div>
  );
};
