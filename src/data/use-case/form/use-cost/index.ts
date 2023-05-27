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

  const onSubmit: SubmitHandler<CostRequest> = async ({ image, ...data }) => {
    return console.log(data);

    try {
      let nameImage: string | undefined;

      if (image) {
        const formData = new FormData();

        formData.append('image', image);

        const {
          payload: { filename }
        } = await api.post<{ payload: { filename: string } }>({
          body: formData,
          isFormData: true,
          route: apiPaths.image
        });

        nameImage = filename;
      }
      if (nameImage) Object.assign(data, { ...data, image: nameImage });

      await api.post({
        body: data,
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
