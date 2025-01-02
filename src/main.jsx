import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
import { router } from './routes/routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>

      <RouterProvider router={router} />
      <ToastContainer />
    </HelmetProvider>
  </StrictMode>,
)
