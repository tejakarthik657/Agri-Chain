import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const batches = [
  { id: "#12345", produce: "Heirloom Tomatoes", qty: "500 lbs", date: "2024-07-15", status: "On Farm" },
  { id: "#98700", produce: "Organic Spinach", qty: "200 lbs", date: "2024-07-10", status: "In Transit" },
  { id: "#24680", produce: "Red Bell Peppers", qty: "400 lbs", date: "2024-07-05", status: "Delivered" },
  { id: "#15790", produce: "Yellow Squash", qty: "250 lbs", date: "2024-07-20", status: "On Farm" },
  { id: "#89765", produce: "Green Beans", qty: "350 lbs", date: "2024-07-12", status: "In Transit" },
  { id: "#11223", produce: "Sweet Corn", qty: "600 lbs", date: "2024-07-08", status: "Delivered" },
  { id: "#44556", produce: "Cucumbers", qty: "450 lbs", date: "2024-07-18", status: "On Farm" },
  { id: "#77889", produce: "Zucchini", qty: "300 lbs", date: "2024-07-16", status: "In Transit" },
  { id: "#10111", produce: "Broccoli", qty: "500 lbs", date: "2024-07-02", status: "Delivered" },
  { id: "#12351", produce: "Cauliflower", qty: "400 lbs", date: "2024-07-22", status: "On Farm" },
];

export default function ManageBatches() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [dateSort, setDateSort] = useState<string>("recent");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);

  // Popup State
  const [selectedBatch, setSelectedBatch] = useState<any | null>(null);

  // Filter batches
  let filteredBatches = batches.filter(
    (b) =>
      b.produce.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase())
  );

  if (statusFilter) {
    filteredBatches = filteredBatches.filter((b) => b.status === statusFilter);
  }

  // Sort batches
  filteredBatches.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return dateSort === "recent" ? dateB - dateA : dateA - dateB;
  });

  return (
    <div className="w-full px-10 py-8 relative">
      <h2 className="text-2xl font-semibold mb-6">Market Place</h2>

      {/* Search Bar */}
      <div className="flex items-center mb-6">
        <div className="relative w-full max-w-lg">
          <FaSearch className="absolute left-3 top-3 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search by Produce Name or Batch ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-200 rounded-md pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300"
          />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3 mb-6 relative">
        {/* Status Filter */}
        <div className="relative">
          <button
            onClick={() => {
              setShowStatusDropdown(!showStatusDropdown);
              setShowDateDropdown(false);
            }}
            className="px-4 py-2 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-100"
          >
            Filter by Status
          </button>
          {showStatusDropdown && (
            <div className="absolute mt-1 bg-white border border-gray-200 rounded shadow w-40 z-10">
              {["Delivered", "In Transit", "On Farm"].map((status) => (
                <div
                  key={status}
                  onClick={() => {
                    setStatusFilter(status);
                    setShowStatusDropdown(false);
                  }}
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  {status}
                </div>
              ))}
              <div
                onClick={() => {
                  setStatusFilter(null);
                  setShowStatusDropdown(false);
                }}
                className="px-4 py-2 text-sm text-red-500 hover:bg-gray-100 cursor-pointer"
              >
                Clear Filter
              </div>
            </div>
          )}
        </div>

        {/* Date Sort */}
        <div className="relative">
          <button
            onClick={() => {
              setShowDateDropdown(!showDateDropdown);
              setShowStatusDropdown(false);
            }}
            className="px-4 py-2 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-100"
          >
            Filter by Date Range
          </button>
          {showDateDropdown && (
            <div className="absolute mt-1 bg-white border border-gray-200 rounded shadow w-40 z-10">
              <div
                onClick={() => {
                  setDateSort("recent");
                  setShowDateDropdown(false);
                }}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Recent First
              </div>
              <div
                onClick={() => {
                  setDateSort("oldest");
                  setShowDateDropdown(false);
                }}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                Oldest First
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white border border-gray-200 rounded-lg shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3">Batch ID</th>
              <th className="px-4 py-3">Produce</th>
              <th className="px-4 py-3">Quantity</th>
              <th className="px-4 py-3">Harvest Date</th>
              <th className="px-4 py-3">Current Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBatches.map((batch, i) => (
              <tr key={i} className="hover:bg-gray-50 border-t border-gray-100">
                <td className="px-4 py-3">{batch.id}</td>
                <td className="px-4 py-3">{batch.produce}</td>
                <td className="px-4 py-3">{batch.qty}</td>
                <td className="px-4 py-3">{batch.date}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium ${
                      batch.status === "On Farm"
                        ? "bg-green-100 text-green-700"
                        : batch.status === "In Transit"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {batch.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    className="text-[#1c2536] hover:underline"
                    onClick={() => setSelectedBatch(batch)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup with blurred background (moved to the right) */}
      {selectedBatch && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative translate-x-12">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedBatch(null)}
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold mb-2">Batch Details</h3>
            <p className="text-sm text-gray-600 mb-4">
              Review batch details below.
            </p>

            <div className="border border-gray-200 rounded-md p-4 space-y-2 text-sm">
              <p><span className="font-semibold">Batch ID:</span> {selectedBatch.id}</p>
              <p><span className="font-semibold">Produce:</span> {selectedBatch.produce}</p>
              <p><span className="font-semibold">Quantity:</span> {selectedBatch.qty}</p>
              <p><span className="font-semibold">Harvest Date:</span> {selectedBatch.date}</p>
              <p><span className="font-semibold">Status:</span> {selectedBatch.status}</p>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
                onClick={() => setSelectedBatch(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
