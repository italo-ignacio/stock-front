import { api } from 'infra/http';
import { apiPaths } from 'main/config';
import { registerSchema } from 'validation/schema';
import { resolverError } from 'main/utils';
import { useForm } from 'react-hook-form';
import { useMakeLogin } from 'main/utils/make-login';
import { yupResolver } from '@hookform/resolvers/yup';
import type {
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form';
import type { RegisterRequest } from 'validation/schema';

export const useRegister = (): {
  errors: FieldErrors<RegisterRequest>;
  register: UseFormRegister<RegisterRequest>;
  onSubmit: SubmitHandler<RegisterRequest>;
  handleSubmit: UseFormHandleSubmit<RegisterRequest>;
  getValues: UseFormGetValues<RegisterRequest>;
  setValue: UseFormSetValue<RegisterRequest>;
  isSubmitting: boolean;
} => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm<RegisterRequest>({
    resolver: yupResolver(registerSchema)
  });

  const { login } = useMakeLogin();
  const onSubmit: SubmitHandler<RegisterRequest> = async (data) => {
    try {
      await api.request({
        body: data,
        route: apiPaths.account
      });

      login({
        data: {
          email: data.email,
          password: data.password
        },
        message: 'Cadastrado e logado com sucesso',
        type: 'account'
      });
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
