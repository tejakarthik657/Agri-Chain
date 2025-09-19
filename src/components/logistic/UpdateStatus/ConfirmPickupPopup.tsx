
import React, { useState } from "react";
import { IoClose } from "react-icons/io5"; // ✅ Import X icon

interface ConfirmPickupPopupProps {
  onClose: () => void;
}

const ConfirmPickupPopup: React.FC<ConfirmPickupPopupProps> = ({ onClose }) => {
  const [started, setStarted] = useState(false);

  const handleStartTrip = () => {
    setStarted(true);
  };

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-[2px] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-xl w-96 transform translate-x-12 relative">
        {/* ✅ X button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <IoClose size={22} />
        </button>

        {!started ? (
          <>
            <h2 className="text-lg font-bold mb-3">Confirm Pickup & Start Trip</h2>
            <p className="text-gray-600 mb-4">
              Review trip details before starting. Once confirmed, this trip will
              be marked as <b>In Transit</b>.
            </p>

            <div className="border rounded-md p-4 bg-gray-50 mb-5 text-sm">
              <p>
                <span className="font-semibold">Driver:</span> John Doe
              </p>
              <p>
                <span className="font-semibold">Vehicle:</span> TRK-5678
              </p>
              <p>
                <span className="font-semibold">Route:</span> Farm Fresh, CA → Distribution Center, NY
              </p>
              <p>
                <span className="font-semibold">ETA:</span> 3 days
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleStartTrip}
                className="px-4 py-2 bg-[#0f1d3a] text-white rounded-md hover:bg-[#1b1e23]"
              >
                Start Trip
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <h2 className="text-lg font-bold text-green-700 mb-2">
              Trip Started!
            </h2>
            <p className="text-gray-600">
              This batch is now marked as <b>In Transit</b>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfirmPickupPopup;
