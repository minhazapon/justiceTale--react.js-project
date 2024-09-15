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
import AuthContext from './firebase and login/AuthContext';
import PrivateRoute from './firebase and login/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>  ,
    children: [
      {
        path: "/",
        element: <PrivateRoute><Home></Home></PrivateRoute>  ,
      },
      {
        path: "/part",
        element:  <PrivateRoute><Partners></Partners></PrivateRoute>   ,
      },
      {
        path: "/sign",
        element:  <PrivateRoute><Signature></Signature></PrivateRoute>   ,
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

      <AuthContext>
        
      <RouterProvider router={router} />
  
      </AuthContext>

  </StrictMode>,
)
