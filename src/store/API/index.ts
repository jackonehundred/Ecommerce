import { BaseQueryApi, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BaseQueryFn } from './interfaces.ts';

const baseUrl = import.meta.env.VITE_BASE_PATH || ''; // http://localhost:8080 or base api url
const baseQuery = fetchBaseQuery({
  baseUrl,
  credentials: 'same-origin', // так не режет корсами при запросе на бэк локально без токена
  prepareHeaders: (headers, { getState }: Pick<BaseQueryApi, 'getState'>) => {
    console.log({ getState });
    /* мы можем проверить, существует ли токен в redux store, и вернуть
 заголовки с токеном авторизации, мы можем использовать функцию getState
     для доступа к данным, хранящимся внутри redux store. */

    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  /* мы можем проверять каждый ответ api и в зависимости от
 статуса можем выполнять определенные действия
, такие как выход пользователя из системы */

  return result;
};

// we need to export apiSlice, so we can use it to request api endpoints
export const apiSlice = createApi({
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
  reducerPath: 'api',
  tagTypes: ['User', 'Tree'], // TODO не забыть добавить сюда теги
});
