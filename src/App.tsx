import React from 'react'
import {Route, Routes} from 'react-router-dom'
import styled from 'styled-components/macro'

import Container from './components/container/container'

import Navbar from './features/navbar/navbar'
import Tablet from './features/tablet/Tablet'

import PrivateRoute from './hocs/private-route'
import {useAppSelector} from './hooks/redux'

import {pages} from './pages'
import {AuthorizationStatus} from './utils/consts'

import png from './assets/images/bg.png'

const Layout = styled.div`
  display: flex;
  gap: 12px;
`
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background: center / cover no-repeat url(${png});
  pointer-events: none;
`

const App = () => {
  const {authorizationStatus} = useAppSelector(state => state.base)

  return (
    <React.Fragment>
      <Background/>
      <Layout>
        {authorizationStatus === AuthorizationStatus.AUTH &&
          <Tablet more>
            <Navbar/>
            <div style={{width: 32}}/>
          </Tablet>
        }
        <Container>
          <Routes>
            {pages.map((el: { path: string, element: React.ReactNode }, idx: number) => (
              <Route
                key={idx}
                path={el.path}
                element={<PrivateRoute>{el.element}</PrivateRoute>}
              />
            ))}
          </Routes>
        </Container>
      </Layout>
    </React.Fragment>
  )
}

export default React.memo(App)
