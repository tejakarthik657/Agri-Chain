import React from "react";

const QuickAccess: React.FC = () => {
  const items = [
    {
      label: "View Sales Dashboard",
      path: "http://localhost:5173/retailer/dashboard",
    },
    {
      label: "Manage Inventory",
      path: "http://localhost:5173/retailer/marketplace",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.path}
          className="p-4 bg-white shadow rounded-lg border border-gray-200 block hover:shadow-md transition"
        >
          <p className="font-semibold text-gray-800">{item.label}</p>
        </a>
      ))}
    </div>
  );
};

export default QuickAccess;
