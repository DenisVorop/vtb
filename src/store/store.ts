import { configureStore } from '@reduxjs/toolkit'

import { authApi } from '../services/auth/auth'
import { marketApi } from '../services/market/market'
import { usersApi } from '../services/user/user'

import { eventsApi } from './../services/events/events'
import { transactionsApi } from './../services/transactions/transactions'

import baseSlice from './slices/base-slice'

const store = configureStore({
    reducer: {
        base: baseSlice,

        [authApi.reducerPath]: authApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
        [transactionsApi.reducerPath]: transactionsApi.reducer,
        [eventsApi.reducerPath]: eventsApi.reducer,
        [marketApi.reducerPath]: marketApi.reducer,
    },
    middleware: (gDM) => gDM().concat([
        authApi.middleware,
        usersApi.middleware,
        transactionsApi.middleware,
        eventsApi.middleware,
        marketApi.middleware,
    ]),
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
