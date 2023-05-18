import { ListItemButton } from '@mui/material';
import { ToggleTheme } from 'presentation/atomic-component/atom';
import { paths } from 'main/config';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

export const LaptopHeader: FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className={
        'flex gap-5 justify-around items-center p-4 w-full border-b-2 border-gray-100 dark:bg-gray-800 dark:border-0'
      }
    >
      <ListItemButton
        onClick={(): void => {
          navigate(paths.dashboard);
        }}
      >
        Logo do site
      </ListItemButton>{' '}
      <ToggleTheme />
    </div>
  );
};
