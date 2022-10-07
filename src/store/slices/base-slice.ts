import { createSlice } from '@reduxjs/toolkit'

import { AuthorizationStatus } from '../../utils/consts'

interface baseInitialState {
    authorizationStatus: string
}

const initialState: baseInitialState = {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
}

export const baseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        setAuthorizationStatus: (state, action) => {
            state.authorizationStatus = action.payload
        },
    },
    extraReducers: (builder) => {
    },
})

export const {
    setAuthorizationStatus,
} = baseSlice.actions

export default baseSlice.reducer
