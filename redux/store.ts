import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { callEndpoint } from 'endPoint/endPoint';
import { ShowPopup } from 'types/types';
import homeReducer from 'views/HomePage/redux';

export interface AppState {
  hasSyncedWithStorage: boolean,
  showPopup: ShowPopup,
}

const initialState: AppState = {
  hasSyncedWithStorage: false,
  showPopup: {},
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setHasSyncedWithStorage: (state, action: PayloadAction<boolean>) => {
      state.hasSyncedWithStorage = action.payload;
    },
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
  },
});

export const { setHasSyncedWithStorage, setShowPopup } = counterSlice.actions;

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: {
      extraArgument: { callEndpoint },
    },
  }),
  reducer: {
    app: counterSlice.reducer,
    home: homeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const selectHasSynced = (state: RootState) => state.app.hasSyncedWithStorage;
export const selectShowPopup = (state: RootState) => state.app.showPopup;

export default counterSlice.reducer;
