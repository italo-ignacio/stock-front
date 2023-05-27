import { FormButton, LabelInput } from 'presentation/atomic-component/atom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useLogin } from 'data/use-case';
import { useState } from 'react';
import type { FC } from 'react';

export const LoginForm: FC<{ isDriver: boolean }> = ({ isDriver }) => {
  const { handleSubmit, onSubmit, register, errors, getValues, setValue, isSubmitting } =
    useLogin();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const onClickHandler = (): void => {
    localStorage.setItem('recover_email', getValues('email'));
  };

  return (
    <form
      className={'flex flex-col gap-8 w-[100%] md:w-[400px] ml-auto mr-auto'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={'flex justify-center'}>
        <h1 className={'text-primary font-bold text-xl dark:text-gray-100'}>
          {isDriver ? 'Login como motorista' : 'Login'}
        </h1>
      </div>

      <LabelInput
        color={'secondary'}
        error={!!errors.email}
        onChange={({ target }): void => setValue('email', target.value, { shouldValidate: true })}
        placeholder={'E-mail'}
        register={register('email')}
        type={'email'}
      />

      <LabelInput
        EndIcon={showPassword ? VisibilityOff : Visibility}
        color={'secondary'}
        error={!!errors.password}
        handleEndFunction={handleClickShowPassword}
        placeholder={'Senha'}
        register={register('password')}
        type={showPassword ? 'text' : 'password'}
      />

      <span className={'text-red underline flex justify-end mt-[-1rem] text-[16px]'}>
        <label className={'cursor-pointer'} onClick={onClickHandler}>
          Esqueci minha senha
        </label>
      </span>

      <FormButton isSubmitting={isSubmitting} label={'Entrar'} />
    </form>
  );
};
