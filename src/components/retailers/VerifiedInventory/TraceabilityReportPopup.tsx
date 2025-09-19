import React from "react";
import { FiX } from "react-icons/fi";

interface TraceabilityReportPopupProps {
  batchId: string;
  produce: string;
  farm: string;
  date: string;
  quantity: string;
  onClose: () => void;
}

const TraceabilityReportPopup: React.FC<TraceabilityReportPopupProps> = ({
  batchId,
  produce,
  farm,
  date,
  quantity,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-lg shadow-xl w-[400px] p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <FiX className="text-xl" />
        </button>

        {/* Title */}
        <h2 className="text-lg font-bold mb-4 text-gray-800">
          Traceability Report
        </h2>

        {/* Report Details */}
        <div className="space-y-3 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Batch ID:</span> {batchId}
          </p>
          <p>
            <span className="font-semibold">Produce:</span> {produce}
          </p>
          <p>
            <span className="font-semibold">Origin Farm:</span> {farm}
          </p>
          <p>
            <span className="font-semibold">Date Received:</span> {date}
          </p>
          <p>
            <span className="font-semibold">Quantity:</span> {quantity}
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span className="text-green-600 font-medium">In Stock</span>
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end mt-5">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#0f1d3a] text-white rounded-md hover:bg-[#1b1e23]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TraceabilityReportPopup;
