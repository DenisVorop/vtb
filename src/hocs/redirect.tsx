import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useNotification } from '../hooks/use-notify'

import Auth from '../pages/auth/auth'

import { path } from '../utils/consts'


export default function Redirect(props: { to: string }) {
    const navigate = useNavigate()
    const { notify } = useNotification()

    React.useEffect(() => {
        navigate(props.to)
        notify({
            type: 'danger',
            content: () => 'Вы не авторизованы',
        })
    }, [])

    return (
        props.to === path.AUTH
            ? <Auth />
            : null
    )
}
