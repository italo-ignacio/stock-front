import { FormButton, LabelInput } from 'presentation/atomic-component/atom';
import { IconButton, Switch, Tooltip } from '@mui/material';
import { Info } from '@mui/icons-material';
import { useVehicleFleet } from 'data/use-case';
import type { FC } from 'react';

interface VehicleFleetFormProps {
  closeModal: () => void;
}
export const VehicleFleetForm: FC<VehicleFleetFormProps> = ({ closeModal }) => {
  const { handleSubmit, onSubmit, register, errors, setValue, getValues, isSubmitting } =
    useVehicleFleet({ closeModal });

  return (
    <form
      className={'flex flex-col gap-4 w-[100%] md:w-[400px] ml-auto mr-auto'}
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

      <div className={'flex flex-col justify-center items-center'}>
        <div className={'flex gap-2 justify-center items-center dark:text-white'}>
          <div>Aprovar custos automaticamente:</div>

          <Tooltip
            enterTouchDelay={0}
            leaveTouchDelay={50000}
            title={'Quando o motorista cadastrar um custo ele será aprovado automaticamente'}
          >
            <IconButton>
              <Info color={'info'} />
            </IconButton>
          </Tooltip>
        </div>

        <Switch
          onChange={(event): void =>
            setValue('autoApproveCost', event.target.checked, {
              shouldValidate: true
            })
          }
          value={getValues('autoApproveCost')}
        />
      </div>

      <FormButton isSubmitting={isSubmitting} label={'Cadastrar'} />
    </form>
  );
};
