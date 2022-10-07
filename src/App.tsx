import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import PrivateRoute from './hocs/private-route'

import { pages } from './pages'

const App = () => {
  return (
    <Routes>
      {pages.map((el: { path: string, element: React.ReactNode }, idx: number) => (
        <Route
          key={idx}
          path={el.path}
          // element={<PrivateRoute>{el.element}</PrivateRoute>}
          element={el.element}
        />
      ))}
    </Routes>
  )
}

export default React.memo(App)
