import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Cookies } from 'typescript-cookie'


import { useNotification } from '../hooks/use-notify'
import { useAppDispatch, useAppSelector } from '../hooks/redux'

import { AuthorizationStatus, path } from '../utils/consts'

import Header from '../features/header/header'

import { setAuthorizationStatus } from '../store/slices/base-slice'

import Redirect from './redirect'


interface IPrivateRouteProps {
  children: React.ReactNode
}

const PrivateRoute: React.FC<IPrivateRouteProps> = ({ children }) => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const { notify } = useNotification()
  const [isLoading, setIsLoading] = React.useState(true)

  const authorizationStatus = useAppSelector((state) => state.base.authorizationStatus)

  React.useEffect(() => {
    if (authorizationStatus !== AuthorizationStatus.AUTH && Cookies.get('user')) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.AUTH))
    }

    if (!Cookies.get('user')) {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH))
    }

    if (location.pathname === '/auth' && Cookies.get('user')) {
      navigate('/')
      notify({
        type: 'success',
        content: () => 'Вы авторизованы',
      })
    }

    setIsLoading(false)
  }, [authorizationStatus])

  return (
    <>
      {!isLoading
        ? authorizationStatus === AuthorizationStatus.AUTH
          ? <>
            {/* <Header /> */}
            {children}
          </>
          : <Redirect to={path.AUTH} />
        : <h1>Loading...</h1>
      }
    </>
  )
}

export default React.memo(PrivateRoute)
