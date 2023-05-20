/* eslint-disable no-unreachable */
import { api } from 'infra/http';
import { apiPaths } from 'main/config';
import { queryClient } from 'infra/lib';
import { resolverError } from 'main/utils';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { vehicleSchema } from 'validation/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import type {
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form';
import type { VehicleRequest } from 'validation/schema';

interface useVehicleProps {
  closeModal: () => void;
}
export const useVehicle = ({
  closeModal
}: useVehicleProps): {
  errors: FieldErrors<VehicleRequest>;
  register: UseFormRegister<VehicleRequest>;
  onSubmit: SubmitHandler<VehicleRequest>;
  handleSubmit: UseFormHandleSubmit<VehicleRequest>;
  getValues: UseFormGetValues<VehicleRequest>;
  setValue: UseFormSetValue<VehicleRequest>;
  isSubmitting: boolean;
} => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm<VehicleRequest>({
    resolver: yupResolver(vehicleSchema)
  });

  const onSubmit: SubmitHandler<VehicleRequest> = async (data) => {
    return console.log(data);

    try {
      await api.post({
        body: data,
        route: apiPaths.vehicle
      });
      queryClient.invalidateQueries('vehicle');
      closeModal();
      toast.success('Cadastrado com sucesso');
    } catch (err) {
      resolverError(err);
    }
  };

  return {
    errors,
    getValues,
    handleSubmit,
    isSubmitting,
    onSubmit,
    register,
    setValue
  };
};
