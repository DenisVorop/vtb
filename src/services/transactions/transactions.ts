import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'

import { TTransaction } from '../../types/types'

import { BASE_URL } from '../../utils/consts'

export const transactionsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    reducerPath: 'transactionsApi',
    tagTypes: ['Users'],
    endpoints: (build: EndpointBuilder<BaseQueryFn<string | FetchArgs, { content: TTransaction[] }, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 'Users', 'transactionsApi'>) => ({
        getUserTransactions: build.query<TTransaction[], number>({
            query(id: number) {
                return {
                    url: `/api/history/${id}`,
                    method: 'GET',
                }
            },
            transformResponse: (response: { content: TTransaction[] }) => response.content,
            // invalidatesTags: [{ type: "Users", id: "LIST" }],
        }),
    }),
})

export const {
    useGetUserTransactionsQuery,
} = transactionsApi
