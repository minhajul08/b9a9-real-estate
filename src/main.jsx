import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Components/Page/Home';
import AuthProvider from './Providers/AuthProvider';
import Estate from './Estate/Estate';
import Update from './Profile/Update';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ErrorPage from './Components/Page/ErrorPage';
import EstateDetails from './Estate/EstateDetails';
import PrivateRoute from './Root/PrivateRoutes/PrivateRoute';
import Works from './Components/Page/Works/Works';
import Posts from './Components/Page/Posts/Posts';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch ('/forest.json')
      },
       {
        path: "/post",
        element: <Posts></Posts>,
        loader: () => fetch ('/post.json')
       },
       {
        path: "works",
        element:<Works></Works>,
        loader: () => fetch ('/project.json')
       },
      {
        path: "/update",
        element: <PrivateRoute>
          <Update></Update> 
        </PrivateRoute>
      },
      {
        path:'/estate',
        element:<Estate></Estate>,
       
      
      },
      {
        path:'/estateDetails/:id',
        element:<PrivateRoute>
          <EstateDetails></EstateDetails>
          </PrivateRoute>,
          loader: () => fetch ('/forest.json')
  
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
