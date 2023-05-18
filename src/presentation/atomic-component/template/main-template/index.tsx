import { Grow } from '@mui/material';
import { Header, Sidebar } from 'presentation/atomic-component/organism';
import { Outlet } from 'react-router-dom';
import type { FC } from 'react';

export const MainTemplate: FC = () => (
  <main className={'w-full h-screen flex bg-gray-50 dark:bg-gray-900 dark:text-white'}>
    <section className={'flex flex-col w-full h-ful'}>
      <Header />

      <div className={'flex w-full h-full'}>
        <Sidebar />

        <Grow in>
          <div className={'flex flex-col w-full h-full p-3 gap-3'}>
            <Outlet />
          </div>
        </Grow>
      </div>
    </section>
  </main>
);
