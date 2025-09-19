import React from "react";

export default function NotificationFilter({
  filter,
  setFilter,
}: {
  filter: string;
  setFilter: (f: string) => void;
}) {
  return (
    <div className="flex gap-3">
      {["All", "Unread", "Read"].map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition ${
            filter === f
              ? "bg-[#0f1d3a] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
