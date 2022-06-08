import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  hasSyncedWithStorage: boolean,
}

const initialState: AppState = {
  hasSyncedWithStorage: false,
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setHasSyncedWithStorage: (state, action: PayloadAction<boolean>) => {
      state.hasSyncedWithStorage = action.payload;
    },
  },
});

export const { setHasSyncedWithStorage } = counterSlice.actions;

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: true,
  }),
  reducer: {
    app: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const selectHasSynced = (state: RootState) => state.app.hasSyncedWithStorage;

export default counterSlice.reducer;
