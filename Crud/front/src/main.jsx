import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./components/ui/provider"


import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import PageClient from './components/pages/pageClient'
import PageEmployee from './components/pages/pageEmployee'
import Sistem from './components/pages/sistem'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Clientes",
    element: <PageClient />,

  },
  {
    path: "/Funcionarios",
    element: <PageEmployee />,

  },
  {
    path: "/Funcionarios/sistem",
    element: <Sistem/>,

  }

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider>
      <RouterProvider router={router} />
    </Provider>

  </StrictMode>
)
