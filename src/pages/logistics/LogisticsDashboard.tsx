
import React from "react";
import { useNavigate } from "react-router-dom";
import StatsCard from "../../components/logistic/dashboard/StatsCard";
import ShipmentsList from "../../components/logistic/dashboard/ShipmentsList";

import { MdQrCodeScanner } from "react-icons/md";

const LogisticsDashboard: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "In Transit", value: 12, change: "+20%", positive: true },
    { title: "Pending Pickups", value: 5, change: "-10%", positive: false },
    { title: "Deliveries Today", value: 8, change: "+15%", positive: true },
  ];

  const shipments = [
    {
      id: "20231026-001",
      origin: "Farm Fresh",
      destination: "City Market",
      weight: "1000 lbs",
      time: "2023-10-26 10:00 AM",
    },
    {
      id: "20231026-002",
      origin: "Green Acres",
      destination: "Urban Grocer",
      weight: "500 lbs",
      time: "2023-10-26 11:30 AM",
    },
    {
      id: "20231026-006",
      origin: "Hillside Farms",
      destination: "City Market",
      weight: "600 lbs",
      time: "2023-10-26 04:45 PM",
    },
    {
      id: "20231026-003",
      origin: "Sunny Fields",
      destination: "Metro Mart",
      weight: "750 lbs",
      time: "2023-10-26 12:45 PM",
    },
    {
      id: "20231026-004",
      origin: "Harvest Farms",
      destination: "Central Market",
      weight: "1200 lbs",
      time: "2023-10-26 02:15 PM",
    },
  ];

  const quickLinks = [
    { name: "Help Center", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Logout", href: "#" },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Logistics Dashboard
          </h1>
          <p className="text-gray-500">Welcome to your dashboard.</p>
        </div>
        <button
          onClick={() => navigate("/logistics/update-status")}
          className="flex items-center gap-2 px-4 py-2 bg-[#0f1d3a] text-white rounded-lg shadow hover:bg-[#1c2a4a]"
        >
          <MdQrCodeScanner className="w-5 h-5" />
          Scan & Update Batch Status
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            positive={stat.positive}
          />
        ))}
      </div>

      {/* Active Shipments */}
      <ShipmentsList shipments={shipments} />

      {/* Quick Links */}
    
    </div>
  );
};

export default LogisticsDashboard;
