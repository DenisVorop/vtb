import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '../../utils/consts'

export const authApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    reducerPath: 'authApi',
    tagTypes: ['Auth'],
    endpoints: (build: EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 'Auth', 'authApi'>): any => ({
        auth: build.query({
            query(body: { id: number }) {
                return {
                    url: '/api/auth',
                    method: 'POST',
                    body,
                }
            },
            transformResponse: (response: any) => response?.content,
            // providesTags: [{ type: "Auth", id: "SCHEME" }],
        }),
    }),
})

export const {
    useAuthQuery,
} = authApi
