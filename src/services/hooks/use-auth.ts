import React from 'react'

import { setUser } from '../../store/slices/base-slice'

import { useAuthQuery } from '../auth/auth'

import { useAppDispatch } from './../../hooks/redux'

export const useAuth = (status: string): [any, (id: number) => void] => {
    const dispatch = useAppDispatch()
    const [id, setId] = React.useState<number>(0)
    const handleChangeId = (id: number) => setId(id)
    const { data, isLoading, refetch } = useAuthQuery({ id: id })
    React.useEffect(() => {
        if (status === 'auth' && !!data) {
            dispatch(setUser(data))
        }
    }, [status, data, dispatch, isLoading])
    return [data, handleChangeId]
}
