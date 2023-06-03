import { decryptData } from 'main/utils/crypto';
import { store } from 'store';
import jwtDecode from 'jwt-decode';
import type { UserProps } from 'domain/models';

interface tokenProps extends UserProps {
  sub: string;
  iss: string;
  exp: number;
  iat: number;
}

const defaultValues = {
  isExpired: 1000
};

export const decodeToken = (): tokenProps | null => {
  const accessToken = decryptData(store.getState().auth.accessToken || '');

  if (accessToken) return jwtDecode(accessToken);
  return null;
};

export const tokenIsExpired = (): boolean => {
  const token = decodeToken();

  try {
    if (token) return !!(Date.now() >= token.exp * defaultValues.isExpired);
    return true;
  } catch {
    return true;
  }
};
