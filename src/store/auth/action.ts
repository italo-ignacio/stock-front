export interface AuthSuccessAction {
  accessToken: string;
  refreshToken: string;
}

export interface RefreshTokenSuccessAction {
  accessToken: string;
}
