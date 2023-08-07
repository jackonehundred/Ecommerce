import { rootApi } from '@store/API/root';
import { Store } from '@store/index.ts';

import { IDomainName } from './API/root/interfaces';

// TODO: Если возвращаем объект появляется warning о использовании мемоизации - прикрутить мемоизацию или использовать так
export const getFields =
  (slice: string, fields: string) =>
  (state: Store): Store =>
    state[slice as keyof Store][fields];

const defaultRoot: IDomainName = {
  name: 'default.tech',
};
export const useGetRootFromCache = (): IDomainName => {
  const { root } = rootApi.useGetRootQuery(undefined, {
    selectFromResult: ({ data }) => ({
      root: data,
    }),
  });

  return root?.domain ?? defaultRoot;
};
