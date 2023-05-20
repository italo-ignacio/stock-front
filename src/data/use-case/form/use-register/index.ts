import { api } from 'infra/http';
import { apiPaths } from 'main/config';
import { registerSchema } from 'validation/schema';
import { resolverError } from 'main/utils';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { Dispatch, SetStateAction } from 'react';
import type {
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form';
import type { RegisterRequest } from 'validation/schema';

interface useRegisterProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}
export const useRegister = ({
  setIsLogin
}: useRegisterProps): {
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

  const onSubmit: SubmitHandler<RegisterRequest> = async (data) => {
    try {
      await api.request({
        body: data,
        route: apiPaths.account.register
      });

      toast.success('Cadastrado com sucesso');
      setIsLogin(true);
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
