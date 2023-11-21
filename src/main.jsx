import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './NotFound.jsx';
import Cadastro from './Cadastro.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path: "/",
        element: <Cadastro/>,
      },
      
      // nested routes - identificador unico
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
  </ChakraProvider>,
)
