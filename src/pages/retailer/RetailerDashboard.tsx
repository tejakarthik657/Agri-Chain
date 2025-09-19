
import React from "react";
import { useNavigate } from "react-router-dom";
import StatsCard from "../../components/retailers/dashboard/StatsCard";
import { MdQrCodeScanner } from "react-icons/md";

const RetailerDashboard: React.FC = () => {
  const navigate = useNavigate();

  const stats = [
    { title: "Deliveries Expected Today", value: 3, change: "+10%", positive: true },
    { title: "Pending Verification", value: 1, change: "-5%", positive: false },
    { title: "Issues Logged (7 days)", value: 2, change: "+20%", positive: true },
  ];

 const deliveries = [
  {
    id: "20231026-001",
    eta: "10:00 AM",
    produce: "Apples",
    origin: "Sunny Orchard",
    distributor: "Fresh Farms Co.",
    image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&h=300&fit=crop",
  },
  {
    id: "20231026-002",
    eta: "11:30 AM",
    produce: "Bananas",
    origin: "Tropical Plantation",
    distributor: "Global Produce Inc.",
    image: "https://www.allrecipes.com/thmb/jYmw-0Vijg1E_OuG2yGjEAcdQg4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-new-banana-adobe-ar-4x3-d8f0871e12214350be7ae5575eea4eed.jpg",
  },
  {
    id: "20231026-003",
    eta: "12:45 PM",
    produce: "Carrots",
    origin: "Earthly Farms",
    distributor: "Organic Harvest Ltd.",
    image: "https://harvestmarkets.com.au/cdn/shop/products/ResizerImage2048X1535_1024x1024.jpg?v=1585620612",
  },
];


  return (
    <div className="p-8 bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Receiving Dashboard</h1>
        <button
          onClick={() => navigate("/retailer/receive-verify")}
          className="flex items-center gap-2 px-4 py-2 bg-[#0f1d3a] text-white rounded-lg shadow hover:bg-[#1c2a4a]"
        >
          <MdQrCodeScanner className="w-5 h-5" />
          Scan & Receive Delivery
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
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

     {/* Incoming Deliveries */}
<h2 className="text-lg font-semibold mb-4">Incoming Deliveries</h2>
<div className="space-y-6">
  {deliveries.map((delivery) => (
    <div
      key={delivery.id}
      className="flex justify-between items-center bg-white rounded-lg shadow p-4 hover:shadow-md transition"
    >
      {/* Left Info */}
      <div className="flex-1 pr-4">
        <p className="text-sm text-gray-500">ETA: {delivery.eta}</p>
        <p className="font-semibold text-gray-800">Batch ID: {delivery.id}</p>
        <p className="text-sm text-gray-600 mt-1">
          <span className="font-medium">Produce:</span> {delivery.produce} |{" "}
          <span className="font-medium">Origin:</span> {delivery.origin} |{" "}
          <span className="font-medium">Distributor:</span> {delivery.distributor}
        </p>
      </div>

      {/* Right Image */}
      <img
        src={delivery.image}
        alt={delivery.produce}
        className="w-32 h-20 object-cover rounded-md border"
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default RetailerDashboard;
