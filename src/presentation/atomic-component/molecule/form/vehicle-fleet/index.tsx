import { FormButton, LabelInput } from 'presentation/atomic-component/atom';
import { useVehicleFleet } from 'data/use-case';
import type { FC } from 'react';

interface VehicleFleetFormProps {
  closeModal: () => void;
}
export const VehicleFleetForm: FC<VehicleFleetFormProps> = ({ closeModal }) => {
  const { handleSubmit, onSubmit, register, errors, setValue, isSubmitting } = useVehicleFleet({
    closeModal
  });

  return (
    <form
      className={'flex flex-col gap-8 w-[100%] md:w-[400px] ml-auto mr-auto'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={'flex justify-center'}>
        <h1 className={'text-primary font-bold text-xl dark:text-gray-100'}>Nova frota</h1>
      </div>

      <LabelInput
        color={'secondary'}
        error={!!errors.name}
        onChange={({ target }): void => setValue('name', target.value, { shouldValidate: true })}
        placeholder={'Nome'}
        register={register('name')}
      />

      <FormButton isSubmitting={isSubmitting} label={'Cadastrar'} />
    </form>
  );
};
