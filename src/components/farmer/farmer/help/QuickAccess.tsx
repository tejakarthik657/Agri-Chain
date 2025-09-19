import React from "react";

const QuickAccess: React.FC = () => {
  const links = [
    {
      title: "🌱 Crop Batches",
      description: "Learn how to upload, track, and manage your crop batches.",
    //   link: "/farmers/batches",
      text: "Manage Batches →",
    },
    {
      title: "💰 Payments",
      description: "Check your earnings and payment status.",
    //   link: "/farmers/payments",
      text: "View Payments →",
    },
    {
      title: "🏬 Warehouse Storage",
      description: "Understand how produce is stored and tracked.",
    //   link: "/farmers/warehouse",
      text: "View Storage →",
    },
    {
      title: "⚙ Account Settings",
      description: "Update your profile, contact details, and preferences.",
    //   link: "/farmers/profile",
      text: "Go to Profile →",
    },
    {
      title: "❓ Support",
      description: "Get help from our farmer support team.",
    //   link: "#contact",
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
