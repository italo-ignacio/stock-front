import { decryptData } from 'main/utils';
import { store } from 'store';
import type { UserProps } from 'domain/models';

export interface AuthSuccessAction {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshTokenSuccessAction {
  accessToken: string;
}

export const getUser = (): UserProps => {
  const user = decryptData(store.getState().auth.data || '');

  if (user) return JSON.parse(user) as UserProps;

  return { email: '', id: '', name: '', role: 'driver' };
};
