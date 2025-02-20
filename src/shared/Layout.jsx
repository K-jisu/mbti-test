import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto pt-10 main">{children}</main>
    </>
  );
};

export default Layout;
