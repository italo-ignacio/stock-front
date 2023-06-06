import { DeleteConfirmationModal } from 'presentation/atomic-component/molecule/modal/action-confirmation';
import { ListItemButton } from '@mui/material';
import { QueryName, apiPaths } from 'main/config';
import type { FC } from 'react';
import type { Work } from 'domain/models';

interface WorkCardProps extends Work {
  remove?: boolean;
}

export const WorkCard: FC<WorkCardProps> = ({ ...props }) => (
  <div className={'flex w-full rounded-md border-2 border-primary dark:bg-gray-800 dark:border-0'}>
    <ListItemButton>{props.destiny}</ListItemButton>

    <div className={'p-1'}>
      <DeleteConfirmationModal
        highlightedText={props.destiny}
        id={props.id}
        queryName={QueryName.work}
        route={apiPaths.work}
        successMessage={'Trabalho deletado com sucesso'}
        text={'Tem certeza que deseja excluir o trabalho ?'}
      />
    </div>
  </div>
);
