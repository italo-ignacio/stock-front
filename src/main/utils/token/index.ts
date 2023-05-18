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
