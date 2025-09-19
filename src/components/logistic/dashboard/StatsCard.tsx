import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  positive: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, positive }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex flex-col">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
      <p className={`text-sm ${positive ? "text-green-500" : "text-red-500"}`}>
        {change}
      </p>
    </div>
  );
};

export default StatsCard;
