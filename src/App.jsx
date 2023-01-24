import React from 'react';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import About from './components/About/About'
import Team from './components/team/Team'
import Contact from './components/contact/Contact' ;
import ContactCard from './components/Home/ContactCard/ContactCard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home</div>,
  },  {
    path: "/About",
    element: < About /> ,
  },{
    path: "/Team",
    element: < Team /> ,
  },{
    path: "/Contact",
    element: < Contact /> ,
  },{
    path: "/ContactCard",
    element: < ContactCard /> ,
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
