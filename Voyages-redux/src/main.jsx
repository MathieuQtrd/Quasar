import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//-------------
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router/Router';
import { RouterProvider } from 'react-router-dom';

import { AuthProvider } from "./contexts/AuthContext"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
