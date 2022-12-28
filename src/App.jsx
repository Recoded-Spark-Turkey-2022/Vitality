import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './components/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },  {
    path: "/About",
    element: < About /> ,
  },
]);


function App() {
  return (
    <div>
     
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
