import { configureStore } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

import { apiSlice } from './API';

const store = configureStore({
  devTools: import.meta.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
});

export type TDispatch = typeof store.dispatch;
export type Store = ReturnType<typeof store.getState>;

export default store;
