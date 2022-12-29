import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './components/About/About';
import About2 from './components/About/About2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },  {
    path: "/About",
    element: < About /> ,
  },{
    path: "/About2",
    element: < About2 /> ,
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
