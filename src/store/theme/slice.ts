import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ThemeState {
  theme: 'dark' | 'light';
}

const initialState: ThemeState = {
  theme: 'light'
};

const themeSlice = createSlice({
  initialState,
  name: 'theme',
  reducers: {
    setTheme(state: ThemeState, action: PayloadAction<'dark' | 'light'>) {
      state.theme = action.payload;
    }
  }
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
