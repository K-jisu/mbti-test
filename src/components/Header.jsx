import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center text-white">
        <Link to="/" className="text-primary-color font-semibold">
          홈
        </Link>
        <div className="space-x-4">
          <Link to="/login" className="text-primary-color hover:text-gray-300 ">
            로그인
          </Link>
          <Link
            to="/signup"
            className="text-primary-color hover:text-gray-300 "
          >
            회원가입
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
