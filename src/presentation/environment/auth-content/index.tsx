import { ListItemButton, Paper } from '@mui/material';
import { LoginForm, RegisterForm } from 'presentation/atomic-component/molecule';
import { ToggleTheme } from 'presentation/atomic-component/atom';
import { useState } from 'react';
import type { FC } from 'react';

export const AuthContent: FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isDriver, setIsDriver] = useState(false);

  return (
    <Paper
      className={
        'flex flex-col relative justify-center items-center p-5 pt-10 gap-3 w-[90%] h-min overflow-auto dark:bg-gray-800 laptop:max-w-[450px]'
      }
    >
      {isLogin ? <LoginForm isDriver={isDriver} /> : <RegisterForm />}

      <div className={'flex flex-col items-center justify-center gap-4'}>
        {isLogin ? (
          <ListItemButton onClick={(): void => setIsDriver(!isDriver)}>
            <h2 className={'pointer text-secondary dark:text-gray-100'}>
              {isDriver ? 'Fazer login' : 'Login como motorista'}
            </h2>
          </ListItemButton>
        ) : null}

        <ListItemButton
          onClick={(): void => {
            setIsDriver(false);
            setIsLogin(!isLogin);
          }}
        >
          <h2 className={'pointer text-secondary dark:text-gray-100'}>
            {isLogin ? 'Registrar-se' : 'Fazer login'}
          </h2>
        </ListItemButton>
      </div>

      <div className={'absolute right-3 top-3'}>
        <ToggleTheme />
      </div>
    </Paper>
  );
};
