/* eslint-disable @typescript-eslint/init-declarations */
/* eslint-disable no-unreachable */
import { QueryName, apiPaths } from 'main/config';
import { api } from 'infra/http';
import { costSchema } from 'validation/schema';
import { queryClient } from 'infra/lib';
import { resolverError } from 'main/utils';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { CostRequest } from 'validation/schema';
import type {
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form';

interface useCostProps {
  closeModal: () => void;
}

export const useCost = ({
  closeModal
}: useCostProps): {
  errors: FieldErrors<CostRequest>;
  register: UseFormRegister<CostRequest>;
  onSubmit: SubmitHandler<CostRequest>;
  handleSubmit: UseFormHandleSubmit<CostRequest>;
  getValues: UseFormGetValues<CostRequest>;
  setValue: UseFormSetValue<CostRequest>;
  isSubmitting: boolean;
} => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm<CostRequest>({
    resolver: yupResolver(costSchema)
  });

  const onSubmit: SubmitHandler<CostRequest> = async ({
    image,
    name,
    value,
    vehicleId,
    driverId,
    date,
    description
  }) => {
    try {
      const formData = new FormData();

      formData.append('name', name);
      formData.append('value', value);
      formData.append('vehicleId', vehicleId);
      formData.append('driverId', `${driverId}`);
      formData.append('date', `${date}`);

      if (image) formData.append('image', image);
      if (description) formData.append('description', `${description}`);

      await api.post({
        body: formData,
        isFormData: true,
        route: apiPaths.cost
      });

      queryClient.invalidateQueries(QueryName.cost);
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
