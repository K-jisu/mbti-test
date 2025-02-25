import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const Layout = () => {
  return (
    <>
      <div className=" bg-gray-100">
        <Header />
        <main className="container mx-auto pt-10 main h-full ">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
