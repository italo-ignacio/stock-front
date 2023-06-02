import { createSlice } from '@reduxjs/toolkit';
import type { AuthSuccessAction, RefreshTokenSuccessAction } from './action';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  data: string | null;
}

const initialState: AuthState = {
  accessToken: null,
  data: null,
  refreshToken: null
};

const authSlice = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    logout() {
      return initialState;
    },
    setAuth(state: AuthState, action: PayloadAction<AuthSuccessAction>) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    setTokenOnRefresh(state: AuthState, action: PayloadAction<RefreshTokenSuccessAction>) {
      state.accessToken = action.payload.accessToken;
    },
    setUser(state: AuthState, action: PayloadAction<{ data: string }>) {
      state.data = action.payload.data;
    }
  }
});

export const {
  reducer: authReducer,
  actions: { setAuth, setTokenOnRefresh, logout, setUser }
} = authSlice;
