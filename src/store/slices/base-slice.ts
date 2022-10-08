import { createSlice } from '@reduxjs/toolkit'
import { getCookie, setCookie } from 'typescript-cookie'

import { TUser } from '../../types/types'

import { AuthorizationStatus } from '../../utils/consts'

interface baseInitialState {
    authorizationStatus: string
    user: TUser
}

const initialState: baseInitialState = {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: JSON.parse(getCookie('user') || '{}'),
}

export const baseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        setAuthorizationStatus: (state, action) => {
            state.authorizationStatus = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
            if (action.payload.user_id) {
                setCookie('user', JSON.stringify(action.payload))
                state.authorizationStatus = AuthorizationStatus.AUTH
            }
        },
        setSignOut: (state) => {
            state.user = {} as TUser
        },
    },
    extraReducers: (builder) => {
    },
})

export const {
    setAuthorizationStatus,
    setUser,
    setSignOut,
} = baseSlice.actions

export default baseSlice.reducer
