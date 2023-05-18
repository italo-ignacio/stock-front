import { api } from 'infra/http';
import { apiPaths } from 'main/config';
import { queryClient } from 'infra/lib';
import { resolverError } from 'main/utils';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { vehicleFleetSchema } from 'validation/schema';
import { yupResolver } from '@hookform/resolvers/yup';
import type {
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form';
import type { VehicleFleetRequest } from 'validation/schema';

interface useVehicleFleetProps {
  closeModal: () => void;
}
export const useVehicleFleet = ({
  closeModal
}: useVehicleFleetProps): {
  errors: FieldErrors<VehicleFleetRequest>;
  register: UseFormRegister<VehicleFleetRequest>;
  onSubmit: SubmitHandler<VehicleFleetRequest>;
  handleSubmit: UseFormHandleSubmit<VehicleFleetRequest>;
  getValues: UseFormGetValues<VehicleFleetRequest>;
  setValue: UseFormSetValue<VehicleFleetRequest>;
  isSubmitting: boolean;
} => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm<VehicleFleetRequest>({
    resolver: yupResolver(vehicleFleetSchema)
  });

  const onSubmit: SubmitHandler<VehicleFleetRequest> = async (data) => {
    try {
      await api.post({
        body: data,
        route: apiPaths.vehicleFleet
      });
      queryClient.invalidateQueries('vehicleFleet');
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
