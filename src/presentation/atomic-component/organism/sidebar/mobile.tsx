import { ListItemButton, Slide } from '@mui/material';
import { logout } from 'store/auth/slice';
import { paths } from 'main/config';
import { setSidebar } from 'store/sidebar/slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSidebar } from 'store/sidebar/selector';
import type { FC } from 'react';

export const MobileSidebar: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sidebar = useSidebar();

  return (
    <Slide direction={'right'} in={sidebar}>
      <div
        className={
          'fixed z-40 bg-gray-50 dark:border-0 py-5 px-2 dark:bg-gray-800 flex flex-col justify-between w-full h-[calc(100%-76.3px)] overflow-hidden border-r-2 border-gray-100'
        }
      >
        <div
          className={`fixed z-5 w-full left-0 bg-gray-50 h-screen dark:bg-gray-800 overflow-hidden ${
            sidebar ? 'flex' : 'hidden'
          }`}
        />

        <div className={'flex flex-col gap-4'}>
          <ListItemButton
            onClick={(): void => {
              navigate(paths.dashboard);
              dispatch(setSidebar(false));
            }}
          >
            <span className={'text-primary dark:text-white'}>Dashboard</span>
          </ListItemButton>

          <ListItemButton
            onClick={(): void => {
              navigate(paths.myFleets);
              dispatch(setSidebar(false));
            }}
          >
            <span className={'text-primary dark:text-white'}>Minhas Frotas</span>
          </ListItemButton>
        </div>

        <div>
          <ListItemButton
            onClick={(): void => {
              dispatch(logout());
              dispatch(setSidebar(false));
              navigate(paths.login);
            }}
          >
            <span className={'text-primary dark:text-white'}>Sair</span>
          </ListItemButton>
        </div>
      </div>
    </Slide>
  );
};
