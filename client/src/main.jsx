import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SnackbarProvider } from 'material-ui-snackbar-provider'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SnackbarProvider>
)
