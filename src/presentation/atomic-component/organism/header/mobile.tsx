import { ListItemButton } from '@mui/material';
import { ToggleMenu, ToggleTheme } from 'presentation/atomic-component/atom';
import { paths } from 'main/config';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

export const MobileHeader: FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className={
        'flex sticky gap-5 justify-around items-center p-4 w-full border-b-2 border-gray-100 h-[80px] dark:border-b-gray-700 dark:bg-gray-800 '
      }
    >
      <ListItemButton
        onClick={(): void => {
          navigate(paths.dashboard);
        }}
      >
        Logo do site
      </ListItemButton>

      <ToggleTheme />
      <ToggleMenu />
    </div>
  );
};
