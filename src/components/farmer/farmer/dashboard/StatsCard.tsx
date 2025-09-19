import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  positive: boolean;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, change, positive }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col justify-between">
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-xl font-bold text-gray-800">{value}</p>
      <span
        className={`text-sm font-semibold ${
          positive ? "text-green-600" : "text-red-600"
        }`}
      >
        {change}
      </span>
    </div>
  );
};

export default StatsCard;
