import { api } from 'infra/http';
import { apiPaths, paths } from 'main/config';
import { convertUser } from 'main/utils/convert-user';
import { encryptData } from 'main/utils/crypto';
import { getRedirectPath } from 'store/redirect/selector';
import { resolverError } from 'main/utils/resolver-error';
import { setAuth, setUser } from 'store/auth/slice';
import { setRedirect } from 'store/redirect/slice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { LoginResponse } from 'domain/models';

interface useMakeLoginProps {
  data: { email: string; password: string };
  type: 'account' | 'driver';
  message?: string;
}

export const useMakeLogin = (): {
  login: (data: useMakeLoginProps) => Promise<void>;
} => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async ({ data, type, message }: useMakeLoginProps): Promise<void> => {
    try {
      const { payload } = await api.request<LoginResponse>({
        body: data,
        route: apiPaths.auth[type]
      });

      dispatch(
        setAuth({
          accessToken: encryptData(payload.accessToken),
          refreshToken: encryptData(payload.refreshToken)
        })
      );

      dispatch(setUser({ data: encryptData(JSON.stringify(convertUser())) }));

      toast.success(message ?? 'Logado com sucesso');

      const path = getRedirectPath();

      dispatch(setRedirect({ path: null }));
      navigate(path === null || path === '/' ? paths.dashboard : path);
    } catch (err) {
      resolverError(err);
    }
  };

  return { login };
};
