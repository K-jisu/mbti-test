import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-primary-color p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center text-white">
        <Link to="/" className="text-lg font-semibold text-[#ff5a5f]">
          홈
        </Link>
        <div className="space-x-4">
          <Link to="/login" className="hover:text-gray-300 text-[#ff5a5f]">
            로그인
          </Link>
          <Link to="/signup" className="hover:text-gray-300 text-[#ff5a5f]">
            회원가입
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
