import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components/macro'
import { removeCookie } from 'typescript-cookie'

import { useAppDispatch } from '../../hooks/redux'
import { setAuthorizationStatus, setSignOut } from '../../store/slices/base-slice'
import { AuthorizationStatus } from '../../utils/consts'

interface ILogoutProps { }

const Logout: React.FC<ILogoutProps> = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const exit = React.useCallback(() => {
        console.log('xty')
        dispatch(setSignOut())
        dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH))
        navigate('/auth')
        removeCookie('user')
    }, [dispatch, navigate])

    React.useEffect(() => {
        exit()
    }, [exit])

    return (
        <div>Выход</div>
    )
}

export default React.memo(Logout)
