import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";


function MainLayout() {

  return (
    <>
      <Navbar />

      <div className="container">
        <Outlet />
      </div>


      <Footer />
    </>
  );
}

export default MainLayout;
