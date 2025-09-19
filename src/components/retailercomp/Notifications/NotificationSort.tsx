import React from "react";

export default function RetailerNotificationSort({
  sortOrder,
  setSortOrder,
}: {
  sortOrder: string;
  setSortOrder: (order: string) => void;
}) {
  return (
    <div>
      <label className="text-sm text-gray-600 mr-2">Sort by:</label>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="px-3 py-2 border rounded-md shadow-sm bg-white text-gray-700"
      >
        <option value="Most Recent">Most Recent</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>
  );
}
