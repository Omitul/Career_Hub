import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Define and import the Root component if needed
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
       {
        path: "/",
        element: <Home></Home>
       }
       
    ]
  },
]);
ReactDOM.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
