import { api } from 'infra/http';
import { apiPaths, paths } from 'main/config';
import { convertUser, encryptData, resolverError } from 'main/utils';
import { getRedirectPath } from 'store/redirect/selector';
import { loginSchema } from 'validation/schema';
import { setAuth, setUser } from 'store/auth/slice';
import { setRedirect } from 'store/redirect/slice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import type {
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form';
import type { LoginRequest } from 'validation/schema';
import type { LoginResponse } from 'domain/models';

export const useLogin = (): {
  errors: FieldErrors<LoginRequest>;
  register: UseFormRegister<LoginRequest>;
  onSubmit: SubmitHandler<LoginRequest>;
  handleSubmit: UseFormHandleSubmit<LoginRequest>;
  getValues: UseFormGetValues<LoginRequest>;
  setValue: UseFormSetValue<LoginRequest>;
  isSubmitting: boolean;
} => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    setValue,
    getValues,

    formState: { errors, isSubmitting }
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema)
  });

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    try {
      const { payload } = await api.request<LoginResponse>({
        body: data,
        route: apiPaths.account.auth
      });

      dispatch(
        setAuth({
          accessToken: encryptData(payload.accessToken),
          refreshToken: encryptData(payload.refreshToken)
        })
      );
      console.log(convertUser());

      dispatch(setUser({ data: encryptData(JSON.stringify(convertUser())) }));

      toast.success('Logado com sucesso');

      const path = getRedirectPath();

      dispatch(setRedirect({ path: null }));
      navigate(path === null || path === '/' ? paths.dashboard : path);
    } catch (err) {
      resolverError(err);
    }
  };

  return {
    errors,
    getValues,
    handleSubmit,
    isSubmitting,
    onSubmit,
    register,
    setValue
  };
};
