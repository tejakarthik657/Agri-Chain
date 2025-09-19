import React from "react";
import { IoClose } from "react-icons/io5";

interface JourneyPopupProps {
  onClose: () => void;
  batchId: string;
  produce: string;
  origin: string;
  destination: string;
  deliveryDate: string;
  status: string;
}

const JourneyPopup: React.FC<JourneyPopupProps> = ({
  onClose,
  batchId,
  produce,
  origin,
  destination,
  deliveryDate,
  status,
}) => {
  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-[2px] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-xl w-[28rem] relative">
        {/* X Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <IoClose size={22} />
        </button>

        {/* Title */}
        <h2 className="text-lg font-bold mb-4">Shipment Journey</h2>

        {/* Journey Details */}
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Batch ID:</span> {batchId}
          </p>
          <p>
            <span className="font-semibold">Produce:</span> {produce}
          </p>
          <p>
            <span className="font-semibold">From:</span> {origin}
          </p>
          <p>
            <span className="font-semibold">To:</span> {destination}
          </p>
          <p>
            <span className="font-semibold">Delivered At:</span> {deliveryDate}
          </p>
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span className="text-green-600 font-medium">{status}</span>
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-5">
          <h3 className="text-sm font-semibold mb-2">Journey Timeline</h3>
          <ul className="space-y-2 text-sm">
            <li>✅ Pickup confirmed at Origin</li>
            <li>✅ Arrived at Warehouse</li>
            <li>✅ Out for Delivery</li>
            <li className="font-semibold text-green-700">✅ Delivered</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JourneyPopup;
