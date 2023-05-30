import {
  DatePicker,
  FormButton,
  LabelInput,
  NumericInput,
  SelectImage,
  Textarea
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

    setValue('driverId', '91e6d515-01b4-4e45-b76f-7cf9ec61ca98', {
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
        required
      />

      <NumericInput
        error={!!errors.value}
        numberType={'monetary'}
        onValueChange={({ value }): void => setValue('value', value, { shouldValidate: true })}
        placeholder={'Valor'}
        required
      />

      <DatePicker placeholder={'Data do custo'} required />
      <Textarea label={'Descrição'} />
      <FormButton isSubmitting={isSubmitting} label={'Cadastrar'} />
    </form>
  );
};
