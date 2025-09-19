import React, { useState } from "react";
import { FiX } from "react-icons/fi";

interface QrScannerPopupProps {
  onClose: () => void;
  onScan?: (id: string) => void;
}

const QrScannerPopup: React.FC<QrScannerPopupProps> = ({ onClose, onScan }) => {
  const [scanned, setScanned] = useState(false);

  const handleSimulateScan = () => {
    setScanned(true);
    if (onScan) {
      onScan("BATCH-TMT001");
    }
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-[420px] p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <FiX className="text-xl" />
        </button>

        {!scanned ? (
          <>
            {/* Title */}
            <h2 className="text-lg font-bold mb-6 text-center">
              Scan Batch QR Code
            </h2>

            {/* Scanner Box */}
            <div className="relative border-2 border-dashed border-gray-400 rounded-lg h-56 flex items-center justify-center mb-6 overflow-hidden">
              {/* QR Placeholder */}
              <span className="text-gray-400 text-sm"> QR Scanner Preview</span>

              {/* Red scanning line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-red-500 animate-scan"></div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSimulateScan}
                className="px-4 py-2 bg-[#0f1d3a] text-white rounded-md hover:bg-[#1b1e23]"
              >
                Simulate Scan
              </button>
            </div>
          </>
        ) : (
          // ✅ Success Message
          <div className="text-center py-12">
            <h2 className="text-lg font-bold text-green-700 mb-3">
              ✅ QR Code Scanned!
            </h2>
            <p className="text-gray-600">
              Batch ID <b>BATCH-TMT001</b> verified successfully.
            </p>
          </div>
        )}
      </div>

      {/* Scan animation */}
      <style>
        {`
          @keyframes scan {
            0% { top: 0; }
            100% { top: 100%; }
          }
          .animate-scan {
            animation: scan 2s linear infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default QrScannerPopup;
