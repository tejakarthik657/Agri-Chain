import React from "react";

const QuickAccess: React.FC = () => {
  const links = [
    {
      title: "📦 Shipments",
      description: "Learn how to track and manage your shipments.",
      link: "/logistics/shipment-history",
      text: "View Shipments →",
    },
    {
      title: "⚙️ Account Settings",
      description: "Update your profile, password, and preferences.",
      link: "/logistics/profile",
      text: "Go to Profile →",
    },
    {
      title: "❓ Support",
      description: "Get help from our support team.",
      link: "#contact",
      text: "Contact Support →",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      {links.map((item, idx) => (
        <div
          key={idx}
          className="p-6 bg-white rounded-lg shadow hover:shadow-md transition"
        >
          <h3 className="font-semibold mb-2">{item.title}</h3>
          <p className="text-sm text-gray-500 mb-2">{item.description}</p>
          <a
            href={item.link}
            className="text-[#0f1d3a] text-sm font-medium hover:underline"
          >
            {item.text}
          </a>
        </div>
      ))}
    </div>
  );
};

export default QuickAccess;
