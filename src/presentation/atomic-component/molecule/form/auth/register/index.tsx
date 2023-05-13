import { FormButton, LabelInput, ValidatePassword } from 'presentation/atomic-component/atom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRegister } from 'data/use-case';
import { useState } from 'react';
import type { FC } from 'react';

export const RegisterForm: FC = () => {
  const { handleSubmit, onSubmit, register, errors, setValue, getValues, isSubmitting } =
    useRegister();
  const [showPassword, setShowPassword] = useState(false);
  const [showValidatePassword, setShowValidatePassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const handleClickShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleClickShowPasswordConfirmation = (): void => {
    setShowPasswordConfirmation(!showPasswordConfirmation);
  };

  return (
    <form
      className={'flex flex-col gap-4 w-[100%] md:w-[400px] ml-auto mr-auto'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={'flex justify-center'}>
        <h1 className={'text-primary font-bold text-xl dark:text-gray-100'}>Registrar-se</h1>
      </div>

      <LabelInput
        color={'secondary'}
        error={!!errors.name}
        onChange={({ target }): void => setValue('name', target.value, { shouldValidate: true })}
        placeholder={'Nome'}
        register={register('name')}
      />

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
        onChange={({ target }): void =>
          setValue('password', target.value, { shouldValidate: true })
        }
        onFocus={(): void => {
          setShowValidatePassword(true);
        }}
        placeholder={'Senha'}
        register={register('password')}
        type={showPassword ? 'text' : 'password'}
      />

      {showValidatePassword ? (
        <div className={'flex text-center'}>
          <ValidatePassword password={getValues('password')} />
        </div>
      ) : null}

      <LabelInput
        EndIcon={showPasswordConfirmation ? VisibilityOff : Visibility}
        color={'secondary'}
        error={!!errors.passwordConfirmation}
        handleEndFunction={handleClickShowPasswordConfirmation}
        onChange={({ target }): void =>
          setValue('passwordConfirmation', target.value, { shouldValidate: true })
        }
        onFocus={(): void => {
          setShowValidatePassword(false);
        }}
        placeholder={'Confirmar senha'}
        register={register('passwordConfirmation')}
        type={showPasswordConfirmation ? 'text' : 'password'}
      />

      {errors.passwordConfirmation ? (
        <span className={'text-sm text-red text-center -mt-2'}>
          {errors.passwordConfirmation?.message}
        </span>
      ) : null}

      <FormButton isSubmitting={isSubmitting} label={'Cadastrar'} />
    </form>
  );
};
