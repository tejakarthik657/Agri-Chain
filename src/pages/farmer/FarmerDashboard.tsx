import React from "react";
import StatsCard from "../../components/farmer/farmer/dashboard/StatsCard";
import RecentActivity from "../../components/farmer/farmer/dashboard/RecentActivity";
import QuickLinks from "../../components/farmer/farmer/dashboard/QuickLinks";

const FarmersDashboard: React.FC = () => {
  const stats = [
    { title: "Active Batches", value: 3, change: "+10%", positive: true },
    { title: "Batches Completed (30 days)", value: 12, change: "+5%", positive: true },
    { title: "Total Produce (This Season)", value: "450 lbs", change: "+15%", positive: true },
    { title: "Last Activity", value: "2 hours ago", change: "-5%", positive: false },
  ];

  const activities = [
    { crop: "Tomatoes", status: "Harvesting", batchId: "2024-10-23-001", time: "2 hours ago" },
    { crop: "Lettuce", status: "Growing", batchId: "2024-10-22-003", time: "4 hours ago" },
    { crop: "Cucumbers", status: "Completed", batchId: "2024-10-21-002", time: "1 day ago" },
    { crop: "Peppers", status: "Growing", batchId: "2024-10-20-001", time: "2 days ago" },
    { crop: "Spinach", status: "Completed", batchId: "2024-10-19-004", time: "3 days ago" },
  ];

  const quickLinks = [
    { name: "My Profile", href: "/farmer/profile" },
    { name: "Help & Support", href: "/farmer/help" },
    { name: "Logout", href: "/" },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome back, Ethan!</h1>
      <p className="text-gray-500 mb-6">Today is October 23, 2024</p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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

      {/* Recent Activity */}
      <RecentActivity activities={activities} />

      {/* Quick Links */}
      <QuickLinks links={quickLinks} />
    </div>
  );
};

export default FarmersDashboard;
