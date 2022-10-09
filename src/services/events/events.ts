import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions'
import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react'

import { TEvent, TUser } from '../../types/types'
import { BASE_URL } from '../../utils/consts'

export const eventsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    reducerPath: 'eventsApi',
    tagTypes: ['Events'],
    endpoints: (build: EndpointBuilder<BaseQueryFn<
        string | FetchArgs,
        {},
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta>,
        'Events',
        'eventsApi'>) => ({
            createEvent: build.mutation<TEvent, TEvent>({
                query(body: TEvent) {
                    return {
                        url: '/api/new_event',
                        method: 'POST',
                        body,
                    }
                },
                // providesTags: [{ type: "Events", id: "SCHEME" }],
            }),
            getActiveEventsFromUser: build.query<TEvent[], number>({
                query(user_id: number) {
                    return {
                        url: `/api/get_active_events/${user_id}`,
                        method: 'GET',
                    }
                },
                transformResponse: (response: { content: TEvent[] }) => response.content,
                // providesTags: [{ type: "Events", id: "SCHEME" }],
            }),
            getInactiveEventsFromUser: build.query<TEvent[], number>({
                query(user_id: number) {
                    return {
                        url: `/api/get_inactive_events/${user_id}`,
                        method: 'GET',
                    }
                },
                transformResponse: (response: { content: TEvent[] }) => response.content,
                // providesTags: [{ type: "Events", id: "SCHEME" }],
            }),
            getAllEvents: build.query<TEvent[], null>({
                query() {
                    return {
                        url: '/api/get_all_events',
                        method: 'GET',
                    }
                },
                transformResponse: (response: { content: TEvent[] }) => response.content,
                // providesTags: [{ type: "Events", id: "SCHEME" }],
            }),
            getAllActiveEvents: build.query<TEvent[], null>({
                query() {
                    return {
                        url: '/api/get_all_active_events',
                        method: 'GET',
                    }
                },
                transformResponse: (response: { content: TEvent[] }) => response.content,
                // providesTags: [{ type: "Events", id: "SCHEME" }],
            }),
            getAllInactiveEvents: build.query<TEvent[], null>({
                query() {
                    return {
                        url: '/api/get_all_inactive_events',
                        method: 'GET',
                    }
                },
                transformResponse: (response: { content: TEvent[] }) => response.content,
                // providesTags: [{ type: "Events", id: "SCHEME" }],
            }),
            getMembersEvent: build.query<TUser[], number>({
                query(id_event: number) {
                    return {
                        url: `/api/get_members_event/${id_event}`,
                        method: 'GET',
                    }
                },
                transformResponse: (response: { content: TUser[] }) => response.content,
                // providesTags: [{ type: "Events", id: "SCHEME" }],
            }),
            setUserToEvent: build.mutation<any, {
                id_event: string
                id_user: number
            }>({
                query(body: {
                    id_event: string
                    id_user: number
                }) {
                    return {
                        url: '/api/set_user_to_event',
                        method: 'POST',
                        body,
                    }
                },
                transformResponse: (response: { content: any }) => response.content,
                // providesTags: [{ type: "Events", id: "SCHEME" }],
            }),
            delUserFromEvent: build.mutation<any, {
                id_event: string
                id_user: number
            }>({
                query(body: {
                    id_event: string
                    id_user: number
                }) {
                    return {
                        url: '/api/del_user_from_event',
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
    useCreateEventMutation,
    useGetActiveEventsFromUserQuery,
    useGetInactiveEventsFromUserQuery,
    useGetAllEventsQuery,
    useGetAllInactiveEventsQuery,
    useGetAllActiveEventsQuery,
    useGetMembersEventQuery,
    useSetUserToEventMutation,
    useDelUserFromEventMutation,
} = eventsApi
