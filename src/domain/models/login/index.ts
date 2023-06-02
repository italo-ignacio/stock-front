export interface LoginResponse {
  payload: {
    accessToken: string;
    refreshToken: string;
  };
}
export interface UserProps {
  id: string;
  name: string;
  email: string;
  role: 'account' | 'driver';
}
