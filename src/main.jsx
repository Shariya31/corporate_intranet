import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Providers from './app/Providers.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providers>
      <ToastContainer/>
      <App />
    </Providers>
  </StrictMode>,
)
