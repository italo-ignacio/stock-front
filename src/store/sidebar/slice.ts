import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface SidebarState {
  open: boolean;
}

const initialState: SidebarState = {
  open: false
};

const SidebarSlice = createSlice({
  initialState,
  name: 'sidebar',
  reducers: {
    setSidebar(state: SidebarState, action: PayloadAction<boolean>) {
      state.open = action.payload;
    }
  }
});

export const { setSidebar } = SidebarSlice.actions;

export default SidebarSlice.reducer;
