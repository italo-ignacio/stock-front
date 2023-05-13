import { Outlet } from 'react-router-dom';
import type { FC } from 'react';

export const AuthTemplate: FC = () => (
  <div
    className={
      'flex flex-col w-full h-screen justify-center items-center overflow-hidden bg-gray-100 dark:bg-gray-900'
    }
  >
    <Outlet />
  </div>
);
