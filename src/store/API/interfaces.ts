import { MaybePromise } from '@reduxjs/toolkit/dist/query/tsHelpers';
import { BaseQueryApi } from '@reduxjs/toolkit/query/react';

export type BaseQueryFn<
  Args = any,
  Result = unknown,
  Error = unknown,
  DefinitionExtraOptions = object,
  Meta = object,
> = (
  args: Args,
  api: BaseQueryApi,
  extraOptions: DefinitionExtraOptions,
) => MaybePromise<QueryReturnValue<Result, Error, Meta>>;

export type QueryReturnValue<T = unknown, E = unknown, M = unknown> =
  | {
      data?: undefined;
      error: E;
      meta?: M;
    }
  | {
      data: T;
      error?: undefined;
      meta?: M;
    };
