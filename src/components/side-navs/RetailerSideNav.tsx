import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BsGrid1X2Fill, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { FaCheckCircle, FaBoxes } from 'react-icons/fa';
import { MdHelpCenter } from "react-icons/md";
import { BiLogOut } from 'react-icons/bi';

interface NavItem {
  to: string;
  icon: React.ReactNode;
  name: string;
}

const RetailerSideNav: React.FC<{isExpanded: boolean, toggleSidebar: () => void}> = ({ isExpanded, toggleSidebar }) => {
  const navigate = useNavigate();
  const handleLogout = () => navigate('/');

  const navItems: NavItem[] = [
    { to: "dashboard", icon: <BsGrid1X2Fill />, name: "Dashboard" },
    { to: "receive-verify", icon: <FaCheckCircle />, name: "Receive & Verify" },
    { to: "verified-inventory", icon: <FaBoxes />, name: "Verified Inventory" },
  ];

  const bottomNavItems: NavItem[] = [
    { to: "help", icon: <MdHelpCenter />, name: "Help Center" },
  ];

  const NavItemComponent: React.FC<{ to: string, icon: React.ReactNode, name: string }> = ({ to, icon, name }) => (
    <NavLink end to={to} className={({ isActive }) => `flex items-center p-3 my-1 rounded-lg transition-colors ${isExpanded ? 'justify-start' : 'justify-center'} ${isActive ? 'bg-white text-black' : 'text-gray-400 hover:bg-gray-700 hover:text-white'}`}>
      <div className="text-2xl">{icon}</div>
      {isExpanded && <span className="ml-4 font-medium">{name}</span>}
    </NavLink>
  );

  return (
    <aside className={`fixed left-0 top-0 z-20 flex h-screen flex-col bg-[#1c2536] text-white transition-all duration-300 ease-in-out ${isExpanded ? 'w-64' : 'w-20'}`}>
      <div className="relative flex h-16 items-center justify-center border-b border-gray-800 p-4">
        {isExpanded && <span className="text-xl font-bold">Retailer Portal</span>}
        <button onClick={toggleSidebar} className="absolute right-[-12px] top-1/2 z-20 -translate-y-1/2 rounded-full bg-gray-700 p-0.5 text-2xl text-white">
          {isExpanded ? <BsFillArrowLeftCircleFill /> : <BsFillArrowRightCircleFill />}
        </button>
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto p-2">
        <nav className="flex-1">
          {navItems.map(item => <NavItemComponent key={item.name} {...item} />)}
        </nav>
        <div className="mt-auto border-t border-gray-700 pt-2">
          {bottomNavItems.map(item => <NavItemComponent key={item.name} {...item} />)}
          <button onClick={handleLogout} className={`flex w-full items-center p-3 my-1 rounded-lg text-gray-400 transition-colors hover:bg-red-500 hover:text-white ${isExpanded ? 'justify-start' : 'justify-center'}`}>
            <div className="text-2xl"><BiLogOut /></div>
            {isExpanded && <span className="ml-4 font-medium">Logout</span>}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default RetailerSideNav;