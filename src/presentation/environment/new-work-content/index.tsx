import { WorkForm } from 'presentation/atomic-component/molecule/form';
import type { FC } from 'react';

export const NewWorkContent: FC = () => (
  <div className={'flex flex-col gap-4 h-full'}>
    <div className={'flex p-4 justify-center'}>
      <h2 className={'text-xl font-semibold'}>Cadastrar nova entrega</h2>
    </div>

    <WorkForm />
  </div>
);
