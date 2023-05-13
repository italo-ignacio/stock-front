import { toast } from 'react-toastify';
import type { ErrorResponse } from 'domain/models';

export const resolverError = (err: unknown, message?: string): void => {
  const error = err as ErrorResponse;

  toast.error(message ?? error.message.portuguese);
};
