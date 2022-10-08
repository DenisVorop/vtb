import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components/macro'

import Container from './components/container/container'

import Navbar from './features/navbar/navbar'
import Tablet from './features/tablet/Tablet'

import PrivateRoute from './hocs/private-route'
import { useAppSelector } from './hooks/redux'

import { pages } from './pages'
import { AuthorizationStatus } from './utils/consts'

const Layout = styled.div`
  display: flex;
  gap: 12px;
`

const App = () => {
  const { authorizationStatus } = useAppSelector(state => state.base)

  return (
    <Layout>
      {authorizationStatus === AuthorizationStatus.AUTH &&
        <Tablet more>
          <Navbar />
          <div style={{ width: 32 }} />
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
  )
}

export default React.memo(App)
