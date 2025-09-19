import React, { useState } from "react";
import { BiQrScan } from "react-icons/bi";
import ConfirmPickupPopup from "../../components/logistic/UpdateStatus/ConfirmPickupPopup";
import WarehousePopup from "../../components/logistic/UpdateStatus/WarehousePopup";
import ReportIssuePopup from "../../components/logistic/UpdateStatus/ReportIssuePopup";
import QrScannerPopup from "../../components/logistic/UpdateStatus/QrScannerPopup";

const UpdateStatus: React.FC = () => {
  const [popup, setPopup] = useState<string | null>(null);
  const [qrOpen, setQrOpen] = useState(false);

  return (
    <div className="p-8 bg-gray-50 min-h-screen relative">
      {/* Page Header with QR Scanner Icon */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Updating Batch TMT001</h1>

        {/* QR Scanner Icon */}
        <button
          onClick={() => setQrOpen(true)}
          className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-md"
          title="Scan Batch QR"
        >
          <BiQrScan className="text-2xl text-[#0f1d3a]" />
        </button>
      </div>

      {/* Verification Details */}
      <h2 className="text-lg font-semibold mb-4">Verification Details</h2>
      <div className="grid grid-cols-2 gap-6 mb-8 text-sm">
        <div>
          <p className="text-gray-500">Produce</p>
          <p className="font-medium">Tomatoes</p>
        </div>
        <div>
          <p className="text-gray-500">From</p>
          <p className="font-medium">Farm Fresh, CA</p>
        </div>
        <div>
          <p className="text-gray-500">To</p>
          <p className="font-medium">Distribution Center, NY</p>
        </div>
      </div>

      {/* Action Buttons */}
      <h2 className="text-lg font-semibold mb-4">Contextual Action Buttons</h2>
      <div className="flex justify-center mt-6">
        <div className="flex flex-col gap-3 w-full max-w-md">
          <button
            onClick={() => setPopup("pickup")}
            className="w-full px-3 py-2 text-sm font-semibold bg-[#0f1d3a] text-white rounded-md shadow hover:bg-[#1b1e23]"
          >
            Confirm Pickup & Start Trip
          </button>
          <button
            onClick={() => setPopup("warehouse")}
            className="w-full px-3 py-2 text-sm font-semibold bg-gray-100 text-gray-700 rounded-md shadow-sm hover:bg-gray-200"
          >
            Arrived at Warehouse
          </button>
          <button
            onClick={() => setPopup("issue")}
            className="w-full px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
          >
            Report an Issue
          </button>
        </div>
      </div>

      {/* Popups */}
      {popup === "pickup" && <ConfirmPickupPopup onClose={() => setPopup(null)} />}
      {popup === "warehouse" && <WarehousePopup onClose={() => setPopup(null)} />}
      {popup === "issue" && <ReportIssuePopup onClose={() => setPopup(null)} />}
      {qrOpen && <QrScannerPopup onClose={() => setQrOpen(false)} />}
    </div>
  );
};

export default UpdateStatus;
