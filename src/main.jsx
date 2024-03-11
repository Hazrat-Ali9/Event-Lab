import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Router.jsx'
import AuthContext from './Context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
      </AuthContext>
  </React.StrictMode>,
)
