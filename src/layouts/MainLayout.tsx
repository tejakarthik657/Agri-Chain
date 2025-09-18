import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

interface MainLayoutProps {
  SideNavComponent: React.ComponentType<{ isExpanded: boolean; toggleSidebar: () => void }>;
}

const MainLayout: React.FC<MainLayoutProps> = ({ SideNavComponent }) => {
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <SideNavComponent isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${isSidebarExpanded ? 'ml-64' : 'ml-20'}`}
      >
        <Header />
        <main className="flex-1 overflow-y-auto p-8 bg-white text-black">
          <Outlet /> {/* Child pages (e.g., Dashboard) will be rendered here */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;