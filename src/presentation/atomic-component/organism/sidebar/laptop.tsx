import { ListItemButton } from '@mui/material';
import { logout } from 'store/auth/slice';
import { paths } from 'main/config';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

export const LaptopSidebar: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      className={
        'flex flex-col justify-between h-full border-r-2 border-gray-100 w-[200px] py-4 dark:bg-gray-800 dark:border-0'
      }
    >
      <div className={'flex flex-col gap-3'}>
        <ListItemButton
          onClick={(): void => {
            navigate(paths.dashboard);
          }}
        >
          <span className={'text-primary dark:text-white'}>Dashboard</span>
        </ListItemButton>

        <ListItemButton
          onClick={(): void => {
            navigate(paths.myFleets);
          }}
        >
          <span className={'text-primary dark:text-white'}>Minhas Frotas</span>
        </ListItemButton>
      </div>

      <div>
        <ListItemButton
          onClick={(): void => {
            dispatch(logout());
            navigate(paths.login);
          }}
        >
          <span className={'text-primary dark:text-white'}>Sair</span>
        </ListItemButton>
      </div>
    </div>
  );
};
