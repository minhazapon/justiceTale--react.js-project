import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './Home';
import Partners from './home files/Partners';
import Signature from './home files/Signature';
import Login from './firebase and login/Login';
import SignUp from './firebase and login/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>  ,
    children: [
      {
        path: "/",
        element: <Home></Home>  ,
      },
      {
        path: "/part",
        element:  <Partners></Partners>  ,
      },
      {
        path: "/sign",
        element:  <Signature></Signature>  ,
      },
      {
        path: "/login",
        element: <Login></Login>   ,
      },
      {
        path: "/up",
        element:  <SignUp></SignUp>  ,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <RouterProvider router={router} />
  </StrictMode>,
)
