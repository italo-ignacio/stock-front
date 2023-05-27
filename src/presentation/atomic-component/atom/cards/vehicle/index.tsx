import { Avatar, ListItemButton } from '@mui/material';
import { DeleteConfirmationModal } from 'presentation/atomic-component/molecule/modal/action-confirmation';
import { QueryName, apiPaths } from 'main/config';
import type { FC } from 'react';
import type { Vehicle } from 'domain/models';

export const VehicleCard: FC<Vehicle> = ({ name, id, image }) => (
  <div
    className={
      'flex w-full rounded-md border-2 border-primary dark:bg-gray-800 dark:border-0 items-center'
    }
  >
    <ListItemButton
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
