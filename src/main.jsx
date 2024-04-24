import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import JobDetails from './components/JobDetails/JobDetails';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage/ErrorPage';

// Define and import the Root component if needed
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      //  {
      //   path: "/",
      //   element: <Root />,
      //   errorElement: <ErrorPage />
      //  },
       {
        path: "/",
        element: <Home></Home>
       },
       {
        path:'/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader: ()=> fetch('../jobs.json')
       },
       {
        path:'/job/:id',
        element:<JobDetails></JobDetails>,
        loader: ()=> fetch('../jobs.json')
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
