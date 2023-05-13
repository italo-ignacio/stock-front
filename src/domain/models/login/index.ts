import type { Role } from 'domain/enums';

export interface LoginResponse {
  payload: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface UserProps {
  name: string;
  id: string;
  email: string;
  role: Role;
}
