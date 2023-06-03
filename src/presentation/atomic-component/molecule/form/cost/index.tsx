import {
  DatePicker,
  FormButton,
  LabelInput,
  NumericInput,
  Select,
  SelectImage,
  Textarea
} from 'presentation/atomic-component/atom';
import { convertToSelect } from 'main/utils';
import { getUser } from 'store/auth/action';
import { useCost } from 'data/use-case';
import { useEffect, useState } from 'react';
import { useFindDriverQuery } from 'infra/cache';
import type { FC } from 'react';
import type { SelectValues } from 'presentation/atomic-component/atom';
import type { UseQueryResult } from 'react-query';
import type { VehicleFleetResponse } from 'domain/models';

interface CostFormProps {
  closeModal: () => void;
  vehicleId: string;
}

export const CostForm: FC<CostFormProps> = ({ closeModal, vehicleId }) => {
  const { handleSubmit, onSubmit, register, errors, setValue, isSubmitting } = useCost({
    closeModal
  });

  const [valueInput, setValueInput] = useState<SelectValues | null>(null);

  const [list, setList] = useState<SelectValues[]>([]);

  let driverQuery: UseQueryResult<VehicleFleetResponse> | null = null;

  const { role, id } = getUser();

  if (role === 'account')
    // eslint-disable-next-line react-hooks/rules-of-hooks
    driverQuery = useFindDriverQuery({
      page: 1
    });

  useEffect(() => {
    if (driverQuery)
      if (driverQuery.isSuccess && driverQuery.data.payload)
        setList(convertToSelect(driverQuery.data.payload));
  }, [driverQuery, driverQuery?.data, driverQuery?.isSuccess]);

  useEffect(() => {
    if (list.length >= 1) setValueInput(list[0]);
  }, [list]);

  useEffect(() => {
    setValue('vehicleId', vehicleId, {
      shouldValidate: true
    });
  }, [vehicleId, setValue]);

  useEffect(() => {
    if (role === 'driver')
      setValue('driverId', id, {
        shouldValidate: true
      });
  }, [id, role, setValue]);

  useEffect(() => {
    setValue('driverId', valueInput?.value, {
      shouldValidate: true
    });
  }, [valueInput, setValue]);

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

      <DatePicker
        onChange={(date): void => setValue('date', date)}
        placeholder={'Data do custo'}
        required
      />

      <Textarea
        label={'Descrição'}
        onChange={(event): void => setValue('description', event.target.value)}
      />

      {role === 'account' ? (
        <Select
          change={(value): void => {
            setValueInput(value as SelectValues);
          }}
          label={'Motorista'}
          options={list}
          valueInput={valueInput}
        />
      ) : null}

      <FormButton isSubmitting={isSubmitting} label={'Cadastrar'} />
    </form>
  );
};
