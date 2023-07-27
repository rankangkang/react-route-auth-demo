import React from 'react'
import { createRoot } from 'react-dom/client'
import store from '@/redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import View from './views'
import '@/global.less'

export const root = document.getElementById('app')

root &&
  createRoot(root).render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <View />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  )
