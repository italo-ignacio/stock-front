import { decryptData } from 'main/utils/crypto';
import { store } from 'store';
import jwtDecode from 'jwt-decode';
import type { Role } from 'domain/enums';

interface tokenProps {
  sub: string;
  iss: string;
  exp: number;
  iat: number;
  user: {
    name: string;
    role: Role;
    id: string;
    email: string;
  };
}

const defaultValues = {
  isExpired: 1000
};

export const decodeToken = (): tokenProps => {
  const accessToken = decryptData(store.getState().auth.accessToken || '') || '';

  return jwtDecode(accessToken);
};

export const tokenIsExpired = (): boolean => {
  try {
    if (decodeToken()?.exp) return !!(Date.now() >= decodeToken().exp * defaultValues.isExpired);
    return true;
  } catch {
    return true;
  }
};
