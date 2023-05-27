import { Avatar, ListItemButton } from '@mui/material';
import { DeleteConfirmationModal } from 'presentation/atomic-component/molecule/modal/action-confirmation';
import { QueryName, apiPaths, paths } from 'main/config';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';
import type { Vehicle } from 'domain/models';

interface VehicleCardProps extends Vehicle {
  fleetId: string;
}

export const VehicleCard: FC<VehicleCardProps> = ({ name, id, image, fleetId }) => {
  const navigate = useNavigate();

  return (
    <div
      className={
        'flex w-full rounded-md border-2 border-primary dark:bg-gray-800 dark:border-0 items-center'
      }
    >
      <ListItemButton
        onClick={(): void => {
          navigate(paths.vehicle(fleetId, id));
        }}
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        {name}
        {image ? <Avatar alt={name} src={image} /> : null}
      </ListItemButton>

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
};
