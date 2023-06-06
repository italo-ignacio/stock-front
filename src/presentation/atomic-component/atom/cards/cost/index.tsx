import { DeleteConfirmationModal } from 'presentation/atomic-component/molecule/modal/action-confirmation';
import { ListItemButton } from '@mui/material';
import { QueryName, apiPaths } from 'main/config';
import type { Cost } from 'domain/models';
import type { FC } from 'react';

interface CostCardProps extends Cost {
  remove?: boolean;
}

export const CostCard: FC<CostCardProps> = ({ ...props }) => (
  <div className={'flex w-full rounded-md border-2 border-primary dark:bg-gray-800 dark:border-0'}>
    <ListItemButton>
      {props.name} - {props.value.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })}
    </ListItemButton>

    <div className={'p-1'}>
      <DeleteConfirmationModal
        highlightedText={props.name}
        id={props.id}
        queryName={QueryName.cost}
        route={apiPaths.cost}
        successMessage={'Custo deletado com sucesso'}
        text={'Tem certeza que deseja excluir o custo ?'}
      />
    </div>
  </div>
);
