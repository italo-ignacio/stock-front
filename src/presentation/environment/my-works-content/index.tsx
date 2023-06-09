import { Add } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { paths } from 'main/config';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

export const MyWorksContent: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={'flex items-center gap-4 p-4'}>
        <h2>
          Minhas entregas
          <IconButton onClick={(): void => navigate(paths.newWork)}>
            <Add color={'primary'} />
          </IconButton>
        </h2>
      </div>
    </div>
  );
};
