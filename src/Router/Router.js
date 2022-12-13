import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';

const  router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hellor Home</div>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/contacto",
        element: <div>Hellor contacto</div>,
    },
    {
        path: "/galeria",
        element: <div>Hellor galeria</div>,
    }
]);

const Router = () => {
  return (
    <RouterProvider router={router}>
        
    </RouterProvider>
  );
}

export default Router;
