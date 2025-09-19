import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBell } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

const Header: React.FC = () => {
  return (
    <header className="flex h-16 items-center justify-end border-b border-gray-800 bg-[#1c2536] px-6 text-white">
      <div className="flex items-center gap-5">
        {/* Search Bar */}
        

        {/* Notifications */}
        <Link
          to="notifications"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-700 hover:bg-gray-200"
        >
          <FaBell />
        </Link>

        {/* Profile Icon → Direct Navigation */}
        <Link
          to="profile"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-700 hover:bg-gray-200"
        >
          <BsPersonCircle />
        </Link>
      </div>
    </header>
  );
};

export default Header;
