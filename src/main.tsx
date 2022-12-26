import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './Router'
import { BrowserRouter } from 'react-router-dom'
import './styles/global.css'
import { ShopCarProvider } from './context/shopCarContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopCarProvider>
        <AppRouter />
      </ShopCarProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
