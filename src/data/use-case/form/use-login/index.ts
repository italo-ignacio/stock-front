import { loginSchema } from 'validation/schema';
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
import type { LoginRequest } from 'validation/schema';

export const useLogin = (): {
  errors: FieldErrors<LoginRequest>;
  register: UseFormRegister<LoginRequest>;
  onSubmit: SubmitHandler<LoginRequest>;
  handleSubmit: UseFormHandleSubmit<LoginRequest>;
  getValues: UseFormGetValues<LoginRequest>;
  setValue: UseFormSetValue<LoginRequest>;
  isSubmitting: boolean;
} => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,

    formState: { errors, isSubmitting }
  } = useForm<LoginRequest>({
    resolver: yupResolver(loginSchema)
  });

  const { login } = useMakeLogin();

  const onSubmit: SubmitHandler<LoginRequest> = (data) => {
    login({ data, type: 'account' });
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
