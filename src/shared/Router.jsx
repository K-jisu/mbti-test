import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Results from "../pages/Results";
import Test from "../pages/Test";
import Layout from "./Layout";
import Signup from "../pages/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/results" element={<Results />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
