import { object, ref, string } from 'yup';
import type { InferType } from 'yup';

const defaultValues = {
  passwordMaxLength: 24,
  passwordMinLength: 8
};

export const loginSchema = object().shape({
  email: string().email().required(),
  password: string().required()
});

export type LoginRequest = InferType<typeof loginSchema>;

export const recoverEmailSchema = object().shape({
  email: string().email().required()
});

export type RecoverEmailRequest = InferType<typeof recoverEmailSchema>;

export const recoverPasswordSchema = object().shape({
  code: string().required(),
  password: string()
    .min(defaultValues.passwordMinLength)
    .max(defaultValues.passwordMaxLength)
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])(?=.{8,24})[a-zA-Z0-9!@#$%^&*]+$/gmu
    )
    .required(),
  passwordConfirmation: string().oneOf([ref('password')], 'As senhas não coincidem')
});

export type RecoverPasswordRequest = InferType<typeof recoverPasswordSchema>;
