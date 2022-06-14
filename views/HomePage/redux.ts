import { createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export interface NavigationState {
  isShowServices: boolean
}

const initialState: NavigationState = {
  isShowServices: false,
};

export const counterSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setIsShowServices: (state, action) => {
      state.isShowServices = action.payload;
    },
  },
});

export const { setIsShowServices } = counterSlice.actions;

export const selectIsShowServices = (state: RootState) => state.home.isShowServices;

export default counterSlice.reducer;
