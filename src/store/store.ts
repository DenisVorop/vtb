import { configureStore } from '@reduxjs/toolkit'

import baseSlice from './slices/base-slice'

const store = configureStore({
    reducer: {
        base: baseSlice,
    },
})
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
