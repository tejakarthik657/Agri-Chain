import React, { useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import JourneyPopup from "../../components/logistic/ShipmentHistory/JourneyPopup"; // import popup component

const ShipmentHistory: React.FC = () => {
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [selectedJourney, setSelectedJourney] = useState<any | null>(null);

  const shipments = [
    { id: "B2023-09-15-001", produce: "Tomatoes", origin: "Green Acres Farm", destination: "Fresh Foods Market", date: "2023-09-15 14:30", status: "Delivered" },
    { id: "B2023-09-16-002", produce: "Lettuce", origin: "Sunny Meadows Farm", destination: "Organic Greens Co.", date: "2023-09-16 11:45", status: "Delivered" },
    { id: "B2023-09-17-003", produce: "Apples", origin: "Orchard Valley", destination: "Fruitful Harvest Store", date: "2023-09-17 16:15", status: "Delivered" },
    { id: "B2023-09-18-004", produce: "Potatoes", origin: "Red Earth Farms", destination: "Rooted Retailers", date: "2023-09-18 09:00", status: "Delivered" },
    { id: "B2023-09-19-005", produce: "Carrots", origin: "Golden Fields Farm", destination: "Veggie Delight Market", date: "2023-09-19 13:00", status: "Delivered" },
    { id: "B2023-09-20-006", produce: "Spinach", origin: "Leafy Greens Farm", destination: "Healthy Harvest Co.", date: "2023-09-20 10:30", status: "Delivered" },
  ];

  const filteredShipments = shipments.filter((s) => {
    const matchesSearch =
      s.id.toLowerCase().includes(search.toLowerCase()) ||
      s.produce.toLowerCase().includes(search.toLowerCase()) ||
      s.origin.toLowerCase().includes(search.toLowerCase()) ||
      s.destination.toLowerCase().includes(search.toLowerCase());

    const matchesDate =
      !filterDate ||
      new Date(s.date).toDateString() === new Date(filterDate).toDateString();

    return matchesSearch && matchesDate;
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Completed Shipments Log</h1>

      {/* Search + Filter */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        {/* Search with icon */}
        <div className="relative w-full max-w-md">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by Batch ID, Farm or Retailer"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none"
          />
        </div>

        {/* Filter styled like search input */}
        <div className="relative w-full max-w-xs">
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center justify-between w-full px-4 py-2 border rounded-md shadow-sm bg-gray-50 text-gray-700 hover:bg-gray-100"
          >
            {filterDate
              ? `Filter: ${new Date(filterDate).toLocaleDateString()}`
              : "Filter by Delivery Date"}
            <FiChevronDown
              className={`w-4 h-4 ml-2 transition ${showFilter ? "rotate-180" : ""}`}
            />
          </button>

          {showFilter && (
            <div className="absolute right-0 mt-2 w-full bg-white border rounded-md shadow-lg p-4 z-10">
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Select Date
              </label>
              <input
                type="date"
                value={filterDate}
                onChange={(e) => {
                  setFilterDate(e.target.value);
                  setShowFilter(false); // auto close when picked
                }}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Batch ID</th>
              <th className="px-4 py-3 text-left">Produce</th>
              <th className="px-4 py-3 text-left">Origin Farm</th>
              <th className="px-4 py-3 text-left">Destination Retailer</th>
              <th className="px-4 py-3 text-left">Delivery Date & Time</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredShipments.map((shipment) => (
              <tr key={shipment.id} className="border-t">
                <td className="px-4 py-3">{shipment.id}</td>
                <td className="px-4 py-3">{shipment.produce}</td>
                <td className="px-4 py-3">{shipment.origin}</td>
                <td className="px-4 py-3">{shipment.destination}</td>
                <td className="px-4 py-3">{shipment.date}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded">
                    {shipment.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    className="text-[#1c2536] hover:underline"
                    onClick={() => setSelectedJourney(shipment)}
                  >
                    View Journey
                  </button>
                </td>
              </tr>
            ))}

            {filteredShipments.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="text-center text-gray-500 py-6 italic"
                >
                  No shipments match your filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Popup */}
      {selectedJourney && (
        <JourneyPopup
          onClose={() => setSelectedJourney(null)}
          batchId={selectedJourney.id}
          produce={selectedJourney.produce}
          origin={selectedJourney.origin}
          destination={selectedJourney.destination}
          deliveryDate={selectedJourney.date}
          status={selectedJourney.status}
        />
      )}
    </div>
  );
};

export default ShipmentHistory;
