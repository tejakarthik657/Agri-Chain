
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import TraceabilityReportPopup from "../../components/retailers/VerifiedInventory/TraceabilityReportPopup";

const VerifiedInventory: React.FC = () => {
  const [search, setSearch] = useState("");
  const [selectedBatch, setSelectedBatch] = useState<any | null>(null);

  // 🔹 Filter states
  const [produceFilter, setProduceFilter] = useState("All");
  const [farmFilter, setFarmFilter] = useState("All");
  const [dateFilter, setDateFilter] = useState("All");

  const inventory = [
    {
      batchId: "B2023-09-15-001",
      produce: "Organic Tomatoes",
      farm: "Green Valley Farms",
      date: "2023-09-15",
      quantity: "500 lbs",
      status: "In Stock",
    },
    {
      batchId: "B2023-09-20-006",
      produce: "Organic Carrots",
      farm: "Fresh Roots Farm",
      date: "2023-09-20",
      quantity: "600 lbs",
      status: "Low Stock",
    },
    {
      batchId: "B2023-09-16-002",
      produce: "Organic Lettuce",
      farm: "Sunny Meadows Farm",
      date: "2023-09-16",
      quantity: "300 lbs",
      status: "In Stock",
    },
    {
      batchId: "B2023-09-17-003",
      produce: "Organic Peppers",
      farm: "Red Barn Farm",
      date: "2023-09-17",
      quantity: "400 lbs",
      status: "Pending Verification",
    },
    {
      batchId: "B2023-09-18-004",
      produce: "Organic Cucumbers",
      farm: "Blue Ridge Farm",
      date: "2023-09-18",
      quantity: "250 lbs",
      status: "Expired",
    },
    {
      batchId: "B2023-09-19-005",
      produce: "Organic Spinach",
      farm: "Golden Fields Farm",
      date: "2023-09-19",
      quantity: "350 lbs",
      status: "Out of Stock",
    },
  ];

  // 🔹 Unique values for dropdowns
  const produceTypes = [...new Set(inventory.map((i) => i.produce))];
  const farms = [...new Set(inventory.map((i) => i.farm))];
  const dates = [...new Set(inventory.map((i) => i.date))];

  // 🔎 Filtering logic
  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.batchId.toLowerCase().includes(search.toLowerCase()) ||
      item.produce.toLowerCase().includes(search.toLowerCase()) ||
      item.farm.toLowerCase().includes(search.toLowerCase());

    const matchesProduce =
      produceFilter === "All" || item.produce === produceFilter;

    const matchesFarm = farmFilter === "All" || item.farm === farmFilter;

    const matchesDate = dateFilter === "All" || item.date === dateFilter;

    return matchesSearch && matchesProduce && matchesFarm && matchesDate;
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Verified Produce Inventory</h1>

      {/* Search */}
      <div className="mb-6 relative w-full md:w-1/2">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Search by Batch ID, Produce, or Farm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border rounded-lg pl-10 pr-4 py-2 shadow-sm focus:outline-none"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
       <select
  value={produceFilter}
  onChange={(e) => setProduceFilter(e.target.value)}
  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 border focus:outline-none focus:ring-0"
>
  <option value="All">Filter by Produce Type</option>
  {produceTypes.map((p, i) => (
    <option key={i} value={p}>
      {p}
    </option>
  ))}
</select>

<select
  value={farmFilter}
  onChange={(e) => setFarmFilter(e.target.value)}
  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 border focus:outline-none focus:ring-0"
>
  <option value="All">Filter by Farm</option>
  {farms.map((f, i) => (
    <option key={i} value={f}>
      {f}
    </option>
  ))}
</select>

<select
  value={dateFilter}
  onChange={(e) => setDateFilter(e.target.value)}
  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 border focus:outline-none focus:ring-0"
>
  <option value="All">Filter by Date Received</option>
  {dates.map((d, i) => (
    <option key={i} value={d}>
      {d}
    </option>
  ))}
</select>

      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-sm text-gray-600">
              <th className="px-4 py-3 border border-gray-200">Batch ID</th>
              <th className="px-4 py-3 border border-gray-200">Produce</th>
              <th className="px-4 py-3 border border-gray-200">Origin Farm</th>
              <th className="px-4 py-3 border border-gray-200">Date Received</th>
              <th className="px-4 py-3 border border-gray-200">Quantity</th>
              <th className="px-4 py-3 border border-gray-200">Status</th>
              <th className="px-4 py-3 border border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 text-sm hover:bg-gray-50 transition"
              >
                <td className="px-4 py-3 font-medium text-[#1c2536]-600 border border-gray-200">
                  {item.batchId}
                </td>
                <td className="px-4 py-3 border border-gray-200">{item.produce}</td>
                <td className="px-4 py-3 border border-gray-200">{item.farm}</td>
                <td className="px-4 py-3 border border-gray-200">{item.date}</td>
                <td className="px-4 py-3 border border-gray-200">{item.quantity}</td>
                <td className="px-4 py-3 border border-gray-200">
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded
        ${
          item.status === "In Stock"
            ? "text-green-600 bg-green-100"
            : item.status === "Out of Stock"
            ? "text-red-600 bg-red-100"
            : item.status === "Pending Verification"
            ? "text-yellow-600 bg-yellow-100"
            : item.status === "Expired"
            ? "text-gray-600 bg-gray-200"
            : item.status === "Low Stock"
            ? "text-orange-600 bg-orange-100"
            : "text-gray-600 bg-gray-100"
        }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-3 border border-gray-200">
                  <button
                    onClick={() => setSelectedBatch(item)}
                    className="text-[#1c2536]-600 hover:underline text-sm font-medium"
                  >
                    View Traceability Report
                  </button>
                </td>
              </tr>
            ))}
            {filteredInventory.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-4 py-6 text-center text-gray-500 italic"
                >
                  No records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Traceability Popup */}
      {selectedBatch && (
        <TraceabilityReportPopup
          batchId={selectedBatch.batchId}
          produce={selectedBatch.produce}
          farm={selectedBatch.farm}
          date={selectedBatch.date}
          quantity={selectedBatch.quantity}
          onClose={() => setSelectedBatch(null)}
        />
      )}
    </div>
  );
};

export default VerifiedInventory;
