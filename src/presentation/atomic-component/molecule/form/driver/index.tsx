import { FormButton, LabelInput, Select } from 'presentation/atomic-component/atom';
import { convertList, convertToSelect } from 'main/utils';
import { useDriver } from 'data/use-case';
import { useEffect, useState } from 'react';
import { useFindVehicleFleetQuery } from 'infra/cache';
import type { FC } from 'react';
import type { SelectValues } from 'presentation/atomic-component/atom';

interface DriverFormProps {
  closeModal: () => void;
}

export const DriverForm: FC<DriverFormProps> = ({ closeModal }) => {
  const { handleSubmit, onSubmit, register, errors, setValue, isSubmitting } = useDriver({
    closeModal
  });
  const [valueInput, setValueInput] = useState<SelectValues[]>([]);

  const [list, setList] = useState<SelectValues[]>([]);

  const vehicleFleetQuery = useFindVehicleFleetQuery({
    page: 1
  });

  useEffect(() => {
    if (vehicleFleetQuery.isSuccess && vehicleFleetQuery.data.payload)
      setList(convertToSelect(vehicleFleetQuery.data.payload));
  }, [vehicleFleetQuery.data, vehicleFleetQuery.isSuccess]);

  useEffect(() => {
    if (valueInput)
      setValue('vehicleFleetList', convertList(valueInput), {
        shouldValidate: true
      });
  }, [setValue, valueInput]);

  return (
    <form
      className={'flex flex-col gap-4 w-[100%] ml-auto mr-auto'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <LabelInput
        error={!!errors.name}
        onChange={({ target }): void => setValue('name', target.value, { shouldValidate: true })}
        placeholder={'Nome'}
        register={register('name')}
      />

      <LabelInput
        error={!!errors.email}
        onChange={({ target }): void => setValue('email', target.value, { shouldValidate: true })}
        placeholder={'E-mail'}
        register={register('email')}
      />

      <Select
        change={(value): void => {
          setValueInput(value as SelectValues[]);
        }}
        isMultiple
        label={'Frotas do motorista'}
        options={list}
        valueInput={valueInput}
      />

      <FormButton isSubmitting={isSubmitting} label={'Cadastrar'} />
    </form>
  );
};
