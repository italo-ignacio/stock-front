/* eslint-disable @typescript-eslint/init-declarations */
/* eslint-disable no-unreachable */
import { QueryName, apiPaths } from 'main/config';
import { api } from 'infra/http';
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

export const useWork = (): {
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

  const onSubmit: SubmitHandler<VehicleRequest> = async ({
    image,
    licensePlate,
    name,
    type,
    fleetId,
    driverList
  }) => {
    try {
      const formData = new FormData();

      formData.append('licensePlate', licensePlate);
      formData.append('name', name);
      formData.append('type', type);
      formData.append('fleetId', fleetId);

      if (image) formData.append('image', image);
      if (driverList && driverList.length > 0)
        formData.append('driverList', driverList?.toString());

      await api.post({
        body: formData,
        isFormData: true,
        route: apiPaths.vehicle
      });

      queryClient.invalidateQueries(QueryName.vehicle);

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
