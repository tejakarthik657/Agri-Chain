import React from "react";
import { FiChevronDown } from "react-icons/fi";

interface RetailerNotification {
  id: number;
  type: string;
  title: string;
  description: string;
  time: string;
  isRead: boolean;
}

export default function RetailerNotificationItem({
  notification,
  isExpanded,
  toggleExpand,
}: {
  notification: RetailerNotification;
  isExpanded: boolean;
  toggleExpand: () => void;
}) {
  return (
    <div
      className={`border-b py-4 px-3 cursor-pointer transition ${
        notification.isRead ? "bg-white" : "bg-gray-50"
      }`}
      onClick={toggleExpand}
    >
      <div className="flex justify-between items-center">
        <div>
          <h3
            className={`font-semibold ${
              notification.isRead ? "text-gray-700" : "text-[#0f1d3a]"
            }`}
          >
            {notification.title}
          </h3>
          <p className="text-gray-500 text-sm">{notification.time}</p>
        </div>
        <FiChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isExpanded ? "rotate-180" : ""
          }`}
        />
      </div>

      {isExpanded && (
        <p className="mt-2 text-gray-600 text-sm">{notification.description}</p>
      )}
    </div>
  );
}
