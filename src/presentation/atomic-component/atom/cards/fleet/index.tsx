import { DeleteConfirmationModal } from 'presentation/atomic-component/molecule/modal/action-confirmation';
import { ListItemButton } from '@mui/material';
import { QueryName, apiPaths, paths } from 'main/config';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';
import type { Fleet } from 'domain/models';

interface FleetCardProps extends Fleet {
  remove?: boolean;
}

export const FleetCard: FC<FleetCardProps> = ({ ...props }) => {
  const navigate = useNavigate();

  return (
    <div
      className={'flex w-full rounded-md border-2 border-primary dark:bg-gray-800 dark:border-0'}
    >
      <ListItemButton
        onClick={(): void => {
          navigate(paths.fleet(props.id));
        }}
      >
        {props.name}
      </ListItemButton>

      <div className={'p-1'}>
        <DeleteConfirmationModal
          highlightedText={props.name}
          id={props.id}
          queryName={QueryName.fleet}
          route={apiPaths.fleet}
          successMessage={'Frota deletado com sucesso'}
          text={'Tem certeza que deseja excluir a frota ?'}
        />
      </div>
    </div>
  );
};
