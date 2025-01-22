import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId = "582964043483-497lf9ksn3ovpjmqq5s6ajkjrov923e2.apps.googleusercontent.com">

    <App />
    </GoogleOAuthProvider>
  </StrictMode>,
)
