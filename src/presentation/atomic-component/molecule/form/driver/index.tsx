import { FormButton, LabelInput } from 'presentation/atomic-component/atom';
import { useDriver } from 'data/use-case';
import type { FC } from 'react';

interface DriverFormProps {
  closeModal: () => void;
}

export const DriverForm: FC<DriverFormProps> = ({ closeModal }) => {
  const { handleSubmit, onSubmit, register, errors, setValue, isSubmitting } = useDriver({
    closeModal
  });

  return (
    <form
      className={'flex flex-col gap-4 w-[100%] ml-auto mr-auto'}
      onSubmit={handleSubmit(onSubmit)}
    >
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
      />

      <FormButton isSubmitting={isSubmitting} label={'Cadastrar'} />
    </form>
  );
};
