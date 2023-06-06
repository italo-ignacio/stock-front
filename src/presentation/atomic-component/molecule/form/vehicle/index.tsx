import { DriverModal } from 'presentation/atomic-component/molecule/modal/driver';
import { FormButton, LabelInput, Select, SelectImage } from 'presentation/atomic-component/atom';
import { convertList, convertToSelect } from 'main/utils';
import { useEffect, useState } from 'react';
import { useFindDriverQuery } from 'infra/cache';
import { useVehicle } from 'data/use-case';
import type { FC } from 'react';
import type { SelectValues } from 'presentation/atomic-component/atom';

interface VehicleFormProps {
  closeModal: () => void;
  fleetId: string;
}

export const VehicleForm: FC<VehicleFormProps> = ({ closeModal, fleetId }) => {
  const { handleSubmit, onSubmit, register, errors, setValue, isSubmitting } = useVehicle({
    closeModal
  });

  const [valueInput, setValueInput] = useState<SelectValues[]>([]);

  const [list, setList] = useState<SelectValues[]>([]);

  const driverQuery = useFindDriverQuery({
    page: 1
  });

  useEffect(() => {
    if (driverQuery.isSuccess && driverQuery.data.payload)
      setList(convertToSelect(driverQuery.data.payload));
  }, [driverQuery.data, driverQuery.isSuccess]);

  useEffect(() => {
    setValue('fleetId', fleetId, {
      shouldValidate: true
    });
  }, [fleetId, setValue]);

  useEffect(() => {
    setValue('driverList', convertList(valueInput), {
      shouldValidate: true
    });
  }, [valueInput, setValue]);

  return (
    <form
      className={'flex flex-col gap-4 w-[100%] ml-auto mr-auto'}
      onSubmit={handleSubmit(onSubmit)}
    >
      <SelectImage
        onChange={(file): void => {
          setValue('image', file, {
            shouldValidate: true
          });
        }}
      />

      <LabelInput
        error={!!errors.name}
        onChange={({ target }): void => setValue('name', target.value, { shouldValidate: true })}
        placeholder={'Nome'}
        register={register('name')}
      />

      <LabelInput
        error={!!errors.licensePlate}
        onChange={({ target }): void =>
          setValue('licensePlate', target.value, { shouldValidate: true })
        }
        placeholder={'Placa'}
        register={register('licensePlate')}
        uppercase
      />

      <LabelInput
        error={!!errors.type}
        onChange={({ target }): void => setValue('type', target.value, { shouldValidate: true })}
        placeholder={'Tipo'}
        register={register('type')}
      />

      <div className={'grid grid-cols-[67%_30%] gap-2'}>
        <Select
          change={(value): void => {
            setValueInput(value as SelectValues[]);
          }}
          isMultiple
          label={'Motoristas'}
          options={list}
          valueInput={valueInput}
        />

        <DriverModal />
      </div>

      <FormButton isSubmitting={isSubmitting} label={'Cadastrar'} />
    </form>
  );
};
