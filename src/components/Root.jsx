import React from "react";
import Navbar from "./Navbar/Navnar";
import Footer from "./Navbar/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <main className="min-h-screen max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
