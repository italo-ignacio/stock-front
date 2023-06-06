import { api } from 'infra/http';
import { apiPaths } from 'main/config';
import { fleetSchema } from 'validation/schema';
import { queryClient } from 'infra/lib';
import { resolverError } from 'main/utils';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type {
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form';
import type { FleetRequest } from 'validation/schema';

interface useFleetProps {
  closeModal: () => void;
}
export const useFleet = ({
  closeModal
}: useFleetProps): {
  errors: FieldErrors<FleetRequest>;
  register: UseFormRegister<FleetRequest>;
  onSubmit: SubmitHandler<FleetRequest>;
  handleSubmit: UseFormHandleSubmit<FleetRequest>;
  getValues: UseFormGetValues<FleetRequest>;
  setValue: UseFormSetValue<FleetRequest>;
  isSubmitting: boolean;
} => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm<FleetRequest>({
    resolver: yupResolver(fleetSchema)
  });

  const onSubmit: SubmitHandler<FleetRequest> = async (data) => {
    try {
      await api.post({
        body: data,
        route: apiPaths.fleet
      });
      queryClient.invalidateQueries('fleet');
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
