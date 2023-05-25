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

  const onSubmit: SubmitHandler<VehicleRequest> = async ({ image, ...data }) => {
    try {
      if (image) {
        const formData = new FormData();

        formData.append('image', image);

        await api.put({
          body: formData,
          isFormData: true,
          route: apiPaths.vehicle.image
        });
      }

      await api.post<{ payload: { id: string } }>({
        body: data,
        route: apiPaths.vehicle.all
      });

      queryClient.invalidateQueries(QueryName.vehicle);
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
