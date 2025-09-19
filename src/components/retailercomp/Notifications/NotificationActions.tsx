import React from "react";

export default function RetailerNotificationActions({
  markAllAsRead,
  clearAll,
}: {
  markAllAsRead: () => void;
  clearAll: () => void;
}) {
  return (
    <div className="mt-6 flex justify-end gap-3">
      <button
        onClick={markAllAsRead}
        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
      >
        Mark all as read
      </button>
      <button
        onClick={clearAll}
        className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200"
      >
        Clear all
      </button>
    </div>
  );
}
