import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-full bg-gray-100 flex flex-col justify-between">
        <Header />
        <main className="container mx-auto pt-10 main">{children}</main>
      </div>
    </>
  );
};

export default Layout;
