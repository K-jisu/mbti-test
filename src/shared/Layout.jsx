import React from "react";
import Header from "../components/Common/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="h-full bg-gray-100 flex flex-col justify-between">
        <Header />
        <main className="container mx-auto pt-10 main">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
