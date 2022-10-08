import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'

import { BASE_URL } from '../../utils/consts'

export const eventsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    reducerPath: 'eventsApi',
    tagTypes: ['Events'],
    endpoints: (build: EndpointBuilder<BaseQueryFn<string
        | FetchArgs,
        { content: any },
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta>,
        'Events',
        'eventsApi'>) => ({
            newEvent: build.mutation<any, any>({
                query(body: any) {
                    return {
                        url: '/api/new_event',
                        method: 'POST',
                        body,
                    }
                },
                transformResponse: (response: { content: any }) => response.content,
                // providesTags: [{ type: "Events", id: "SCHEME" }],
            }),
        }),
})

export const {
    useNewEventMutation,
} = eventsApi
