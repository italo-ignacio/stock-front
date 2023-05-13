import { Grow } from '@mui/material';
import { Header, Sidebar } from 'presentation/atomic-component/organism';
import { Outlet } from 'react-router-dom';
import type { FC } from 'react';

export const MainTemplate: FC = () => (
  <main className={'w-full h-screen flex'}>
    <Sidebar />

    <section className={'flex flex-col w-full h-full bg-white gap-3 overflow-hidden'}>
      <Header />

      <Grow in>
        <div className={'flex flex-col w-full h-full p-3 gap-3'}>
          <Outlet />
        </div>
      </Grow>
    </section>
  </main>
);
