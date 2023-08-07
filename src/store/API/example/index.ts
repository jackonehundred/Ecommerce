import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';
import { apiSlice } from '@store/API';
import { BaseQueryFn } from '@store/API/interfaces.ts';

//  TODO нужно узнать какой тип имеет сгенерированный хук из RTK Query
export interface IExampleAPI {
  useAddProduct: any;
  useDeleteProduct: any;
  useGetAllProducts: any;
  useUpdateProduct: any;
}

export const exampleAPI = apiSlice.injectEndpoints({
  endpoints: (builder: EndpointBuilder<BaseQueryFn, string, 'api'>) => ({
    addProduct: builder.mutation({
      invalidatesTags: ['Product'],
      query: ({ productDetails }) => ({
        body: productDetails,
        method: 'POST',
        url: '/products',
      }),
    }),
    deleteProduct: builder.mutation({
      invalidatesTags: ['Product'],
      query: (id: string) => ({
        method: 'DELETE',
        url: `/products/${id}`,
      }),
    }),
    getAllProducts: builder.query({
      providesTags: ['Product'],
      query: () => ({
        url: '/products',
      }),
    }),
    updateProduct: builder.mutation({
      invalidatesTags: ['Product'],
      query: ({ id, details }) => ({
        body: details,
        method: 'PATCH',
        url: `/products/${id}`,
      }),
    }),
  }),
});

export const { useGetAllProducts, useAddProduct, useUpdateProduct, useDeleteProduct } =
  exampleAPI as unknown as IExampleAPI;
console.log({ useAddProduct, useDeleteProduct, useGetAllProducts, useUpdateProduct });
