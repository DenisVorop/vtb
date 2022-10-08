import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'

import { TUser, TUserBalance, TUserTransaction } from '../../types/types'
import { BASE_URL } from '../../utils/consts'

export const usersApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    reducerPath: 'usersApi',
    tagTypes: ['Users'],
    endpoints: (build: EndpointBuilder<BaseQueryFn<string
        | FetchArgs,
        { content: TUser | TUser[] | TUserTransaction[] | TUserBalance },
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta>,
        'Users',
        'usersApi'>) => ({
            getUser: build.query<TUser, number>({
                query(id: number) {
                    return {
                        url: `/api/get_user/${id}`,
                        method: 'GET',
                    }
                },
                transformResponse: (response: { content: TUser }) => response.content,
                // providesTags: [{ type: "Users", id: "SCHEME" }],
            }),
            getAllUsers: build.query<TUser[], null>({
                query() {
                    return {
                        url: '/api/get_users',
                        method: 'GET',
                    }
                },
                transformResponse: (response: { content: TUser[] }) => response.content,
                // invalidatesTags: [{ type: "Users", id: "LIST" }],
            }),
            getUserHistory: build.query<TUserTransaction[], number>({
                query(id: number) {
                    return {
                        url: `/api/history/${id}`,
                        method: 'get',
                    }
                },
                transformResponse: (response: { content: TUserTransaction[] }) => response.content,
                // invalidatesTags: [{ type: "Users", id: "LIST" }],
            }),
            getUserBalance: build.query<TUserBalance, number>({
                query(id: number) {
                    return {
                        url: `/api/balance/${id}`,
                        method: 'get',
                    }
                },
                transformResponse: (response: { content: TUserBalance }) => response.content,
                // invalidatesTags: [{ type: "Users", id: "LIST" }],
            }),
        }),
})

export const {
    useGetUserQuery,
    useGetAllUsersQuery,
    useGetUserHistoryQuery,
    useGetUserBalanceQuery,
} = usersApi
