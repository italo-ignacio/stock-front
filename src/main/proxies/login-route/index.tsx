import { Outlet, useNavigate } from 'react-router-dom';
import { paths } from 'main/config';
import { refreshAccessToken } from 'infra/http/api.function';
import { tokenIsExpired } from 'main/utils';
import { useEffect, useState } from 'react';
import type { FC } from 'react';

export const LoginRoute: FC = () => {
  const [isExpired, setIsExpired] = useState(tokenIsExpired());

  const navigate = useNavigate();

  useEffect(() => {
    if (!isExpired) navigate(paths.dashboard);

    const verify = async (): Promise<void> => {
      try {
        await refreshAccessToken();
        setIsExpired(tokenIsExpired());
      } catch {
        console.error('error refreshing');
      }
    };

    if (isExpired) verify();
  }, [isExpired, navigate]);

  return isExpired ? <Outlet /> : null;
};
