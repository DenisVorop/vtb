import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import store from './store/store'

import { NotifyProvider } from './hooks/use-notify'

import App from './App'

import Notifier from './components/notifier/notifier'

import './styles/index.css'
import { Theme } from './styles/theme'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)

root.render(
  <Provider store={store}>
    <ThemeProvider theme={Theme}>
      <NotifyProvider Component={Notifier}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NotifyProvider>
    </ThemeProvider>
  </Provider>,
)
