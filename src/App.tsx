import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CustomersPage from './pages/CustomersPage';
import MainLayout from './layouts/MainLayout';
import FarmerSideNav from './components/side-navs/FarmerSideNav';
import LogisticsSideNav from './components/side-navs/LogisticsSideNav';
import RetailerSideNav from './components/side-navs/RetailerSideNav';
// Farmer pages
import FarmerDashboard from './pages/farmer/FarmerDashboard';
import AddNewBatch from './pages/farmer/AddNewBatch';
import MyBatches from './pages/farmer/MyBatches';
import MyProfile from './pages/farmer/MyProfile';
import Notifications from './pages/farmer/Notifications';
import HelpCenter from './pages/farmer/HelpCenter';
// Logistics pages
import LogisticsDashboard from './pages/logistics/LogisticsDashboard';
import ShipmentHistory from './pages/logistics/ShipmentHistory';
import UpdateStatus from './pages/logistics/UpdateStatus';
import LogisticsNotifications from './pages/logistics/Notifications';
import LogisticsMyProfile from './pages/logistics/MyProfile';
import LogisticsHelpCenter from './pages/logistics/HelpCenter';
// Retailer pages
import RetailerDashboard from './pages/retailer/RetailerDashboard';
import ReceiveVerify from './pages/retailer/ReceiveVerify';
import VerifiedInventory from './pages/retailer/VerifiedInventory';
import RetailerNotifications from './pages/retailer/Notifications';
import RetailerMyProfile from './pages/retailer/MyProfile';
import RetailerHelpCenter from './pages/retailer/HelpCenter';
import Marketplace from './pages/retailer/MarketPlace'; // 👈 NEW Import

// CRITICAL: This line imports the styles from src/index.css
import './index.css'; 

const App: React.FC = () => {
  return (
    <div className="bg-navy text-gray-200 font-sans min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login/:role" element={<LoginPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          
          {/* Farmer Routes */}
          <Route path="/farmer" element={<MainLayout SideNavComponent={FarmerSideNav} />}>
            <Route index element={<FarmerDashboard />} />
            <Route path="dashboard" element={<FarmerDashboard />} />
            <Route path="add-batch" element={<AddNewBatch />} />
            <Route path="my-batches" element={<MyBatches />} />
            <Route path="profile" element={<MyProfile />} />
            <Route path="notifications" element={<Notifications />} />
            <Route path="help" element={<HelpCenter />} />
          </Route>

          {/* Logistics Routes */}
          <Route path="/logistics" element={<MainLayout SideNavComponent={LogisticsSideNav} />}>
            <Route index element={<LogisticsDashboard />} />
            <Route path="dashboard" element={<LogisticsDashboard />} />
            <Route path="shipment-history" element={<ShipmentHistory />} />
            <Route path="update-status" element={<UpdateStatus />} />
            <Route path="profile" element={<LogisticsMyProfile />} />
            <Route path="notifications" element={<LogisticsNotifications />} />
            <Route path="help" element={<LogisticsHelpCenter />} />
          </Route>

          {/* Retailer Routes */}
          <Route path="/retailer" element={<MainLayout SideNavComponent={RetailerSideNav} />}>
            <Route index element={<RetailerDashboard />} />
            <Route path="dashboard" element={<RetailerDashboard />} />
            <Route path="receive-verify" element={<ReceiveVerify />} />
            <Route path="verified-inventory" element={<VerifiedInventory />} />
            <Route path="marketplace" element={<Marketplace />} /> {/* 👈 NEW Route */}
            <Route path="profile" element={<RetailerMyProfile />} />
            <Route path="notifications" element={<RetailerNotifications />} />
            <Route path="help" element={<RetailerHelpCenter />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
