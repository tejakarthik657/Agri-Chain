import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface WarehousePopupProps {
  onClose: () => void;
}

const WarehousePopup: React.FC<WarehousePopupProps> = ({ onClose }) => {
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirmArrival = () => {
    setConfirmed(true);

    // Auto close after 2 seconds (optional)
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-[2px] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-xl w-96 transform translate-x-12 relative">
        {/* X button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <IoClose size={22} />
        </button>

        {!confirmed ? (
          <>
            {/* Title */}
            <h2 className="text-lg font-bold mb-3">Confirm Arrival at Warehouse</h2>
            <p className="text-gray-600 mb-4">
              Once confirmed, this batch will be marked as <b>Arrived</b> at the warehouse.
            </p>

            {/* Example details */}
            <div className="border rounded-md p-4 bg-gray-50 mb-5 text-sm">
              <p>
                <span className="font-semibold">Warehouse:</span> Distribution Center, NY
              </p>
              <p>
                <span className="font-semibold">Received By:</span> Jane Smith
              </p>
              <p>
                <span className="font-semibold">Time:</span> {new Date().toLocaleString()}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmArrival}
                className="px-4 py-2 bg-[#0f1d3a] text-white rounded-md hover:bg-[#1b1e23]"
              >
                Confirm Arrival
              </button>
            </div>
          </>
        ) : (
          // ✅ Success Message
          <div className="text-center">
            <h2 className="text-lg font-bold text-green-700 mb-2">Arrival Confirmed!</h2>
            <p className="text-gray-600">
              This batch is now marked as <b>Arrived at Warehouse</b>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WarehousePopup;
