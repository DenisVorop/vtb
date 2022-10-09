import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'

import { TEvent } from '../../types/types'
import { BASE_URL } from '../../utils/consts'

export const marketApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    reducerPath: 'marketApi',
    tagTypes: ['Market'],
    endpoints: (build: EndpointBuilder<BaseQueryFn<
        string | FetchArgs,
        {},
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta>,
        'Market',
        'marketApi'>) => ({
            getAllMarket: build.query<TEvent[], { TYPE: string[] }>({
                query(body: { TYPE: string[] }) {
                    return {
                        url: '/api/find_events',
                        method: 'POST',
                        body,
                    }
                },
                transformResponse: (response: { content: TEvent[] }) => response.content,
                // providesTags: [{ type: "Market", id: "SCHEME" }],
            }),
        }),
})

export const {
    useGetAllMarketQuery,
} = marketApi
