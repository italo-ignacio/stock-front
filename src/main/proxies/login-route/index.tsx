import { Outlet, useNavigate } from 'react-router-dom';
import { paths } from 'main/config';
import { tokenIsExpired } from 'main/utils';
import { useEffect } from 'react';
import type { FC } from 'react';

export const LoginRoute: FC = () => {
  const isExpired = tokenIsExpired();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isExpired) navigate(paths.dashboard);
  }, [isExpired, navigate]);

  return isExpired ? <Outlet /> : null;
};
