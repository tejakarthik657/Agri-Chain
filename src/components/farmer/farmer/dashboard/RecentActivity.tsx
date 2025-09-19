import { FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const activities = [
  {
    name: "Tomatoes",
    status: "Harvesting",
    batch: "Batch ID: 2024-09-12-001",
    time: "2 hours ago",
  },
  {
    name: "Lettuce",
    status: "Growing",
    batch: "Batch ID: 2024-09-12-003",
    time: "4 hours ago",
  },
  {
    name: "Cucumbers",
    status: "Growing",
    batch: "Batch ID: 2024-09-12-002",
    time: "1 day ago",
  },
  {
    name: "Peppers",
    status: "Growing",
    batch: "Batch ID: 2024-09-10-005",
    time: "2 days ago",
  },
  {
    name: "Spinach",
    status: "Completed",
    batch: "Batch ID: 2024-09-10-004",
    time: "3 days ago",
  },
];

export default function RecentActivity() {
  const navigate = useNavigate();

  const handleAddBatch = () => {
    navigate("/farmer/add-batch"); // Navigate inside SPA
  };

  return (
    <div className="mt-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Recent Activity</h2>
        <button
          onClick={handleAddBatch}
          className="flex h-8 items-center justify-end border-b border-gray-500 bg-[#1c2536] px-3 text-white rounded-md"
        >
          + Add New Batch
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-b border-gray-200 pb-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                <FaLeaf className="text-gray-600 text-lg" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {activity.name}
                </p>
                <p className="text-xs text-gray-500">
                  Status: {activity.status}
                </p>
                <p className="text-xs text-gray-400">{activity.batch}</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">{activity.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
