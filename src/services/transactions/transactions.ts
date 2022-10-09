import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'

import { TUserTransaction } from '../../types/types'

import { BASE_URL } from '../../utils/consts'

export const transactionsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    reducerPath: 'transactionsApi',
    tagTypes: ['Users'],
    endpoints: (build: EndpointBuilder<BaseQueryFn<string | FetchArgs, { content: TUserTransaction[] }, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 'Users', 'transactionsApi'>) => ({
        getUserTransactions: build.query<TUserTransaction[], number>({
            query(id: number) {
                return {
                    url: `/api/history/${id}`,
                    method: 'GET',
                }
            },
            transformResponse: (response: { content: TUserTransaction[] }) => response.content,
            // invalidatesTags: [{ type: "Users", id: "LIST" }],
        }),
        sendCoin: build.mutation<any, {
            id_user_from: number
            id_user_to: number
            amount: number
        }>({
            query(body) {
                return {
                    url: '/api/mongo_coin/send_coin_by_id_user',
                    method: 'POST',
                    body,
                }
            },
            transformResponse: (response: { content: any }) => response.content,
            // invalidatesTags: [{ type: "Users", id: "LIST" }],
        }),
    }),
})

export const {
    useGetUserTransactionsQuery,
    useSendCoinMutation,
} = transactionsApi
