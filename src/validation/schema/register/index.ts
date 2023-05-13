import { object, ref, string } from 'yup';
import type { InferType } from 'yup';

const defaultValues = {
  passwordMaxLength: 24,
  passwordMinLength: 8
};

export const registerSchema = object().shape({
  email: string().email().required(),
  name: string().required(),
  password: string()
    .min(defaultValues.passwordMinLength)
    .max(defaultValues.passwordMaxLength)
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.{8,24})[a-zA-Z0-9!@#$%^&*]+$/gmu
    )
    .required(),
  passwordConfirmation: string().oneOf([ref('password')], 'As senhas não coincidem')
});

export type RegisterRequest = InferType<typeof registerSchema>;
