import { driverSchema } from 'validation/schema';
import { resolverError } from 'main/utils';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import type { DriverRequest } from 'validation/schema';
import type {
  FieldErrors,
  SubmitHandler,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue
} from 'react-hook-form';

interface useDriverProps {
  closeModal: () => void;
}
export const useDriver = ({
  closeModal
}: useDriverProps): {
  errors: FieldErrors<DriverRequest>;
  register: UseFormRegister<DriverRequest>;
  onSubmit: SubmitHandler<DriverRequest>;
  handleSubmit: UseFormHandleSubmit<DriverRequest>;
  getValues: UseFormGetValues<DriverRequest>;
  setValue: UseFormSetValue<DriverRequest>;
  isSubmitting: boolean;
} => {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors, isSubmitting }
  } = useForm<DriverRequest>({
    resolver: yupResolver(driverSchema)
  });

  const onSubmit: SubmitHandler<DriverRequest> = async (data) => {
    try {
      await console.log(data);

      toast.success('Cadastrado com sucesso');
      closeModal();
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
