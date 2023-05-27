import {
  FormButton,
  LabelInput,
  NumericInput,
  SelectImage
} from 'presentation/atomic-component/atom';
import { useCost } from 'data/use-case';
import { useEffect } from 'react';
import type { FC } from 'react';

interface CostFormProps {
  closeModal: () => void;
  vehicleId: string;
}

export const CostForm: FC<CostFormProps> = ({ closeModal, vehicleId }) => {
  const { handleSubmit, onSubmit, register, errors, setValue, isSubmitting } = useCost({
    closeModal
  });

  useEffect(() => {
    setValue('vehicleId', vehicleId, {
      shouldValidate: true
    });

    setValue('driverId', vehicleId, {
      shouldValidate: true
    });
  }, [vehicleId, setValue]);

  return (
    <form
      className={'flex flex-col gap-4 w-[100%] ml-auto mr-auto'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <LabelInput label={'Comprovante de pagamento'}>
        <SelectImage
          onChange={(file): void => {
            setValue('image', file, {
              shouldValidate: true
            });
          }}
          variant={'secondary'}
        />
      </LabelInput>

      <LabelInput
        error={!!errors.name}
        onChange={({ target }): void => setValue('name', target.value, { shouldValidate: true })}
        placeholder={'Nome'}
        register={register('name')}
      />

      <NumericInput
        error={!!errors.value}
        onValueChange={({ value }): void => setValue('value', value, { shouldValidate: true })}
        placeholder={'Valor'}
      />

      <FormButton isSubmitting={isSubmitting} label={'Cadastrar'} />
    </form>
  );
};
