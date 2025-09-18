import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaBell } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';

const Header: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  // NOTE: The paths for notifications and profile will be relative to the current module
  // For a farmer at '/farmers/dashboard', Link to="/farmers/notifications" will work correctly if structured properly.
  // We will handle this with relative links in the router setup.

  return (
    <header className="flex h-16 items-center justify-end border-b border-gray-800 bg-[#1c2536] px-6 text-white">
      <div className="flex items-center gap-5">
        <div className="relative">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="w-64 rounded-lg border-none bg-gray-100 py-2 pl-10 pr-4 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Link
          to="notifications" // Relative link
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-700 hover:bg-gray-200"
        >
          <FaBell />
        </Link>

        <div className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-2xl text-gray-700 hover:bg-gray-200"
          >
            <BsPersonCircle />
          </button>

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-[#2d3748] shadow-lg">
              <div className="py-1">
                <Link
                  to="profile" // Relative link
                  onClick={() => setProfileDropdownOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-200 hover:bg-gray-600"
                >
                  Profile
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;