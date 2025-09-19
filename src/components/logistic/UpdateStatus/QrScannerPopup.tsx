// import React from "react";
// import { FiX } from "react-icons/fi";

// interface QrScannerPopupProps {
//   onClose: () => void;
// }

// const QrScannerPopup: React.FC<QrScannerPopupProps> = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-xl w-96 p-6 relative">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
//         >
//           <FiX className="text-xl" />
//         </button>

//         {/* Title */}
//         <h2 className="text-lg font-bold mb-4 text-center">Scan Batch QR Code</h2>

//         {/* Fake Scanner Area */}
//         <div className="border-4 border-dashed border-gray-400 rounded-lg h-56 flex items-center justify-center mb-4 relative">
//           <p className="text-gray-500">📷 QR Scanner Preview</p>

//           {/* Red scanning line */}
//           <div className="absolute top-1/2 left-0 w-full h-[2px] bg-red-500 animate-pulse"></div>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-center gap-4">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-[#0f1d3a] text-white rounded-md hover:bg-[#1b1e23]"
//           >
//             Simulate Scan
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QrScannerPopup;

import React, { useState } from "react";
import { FiX } from "react-icons/fi";

interface QrScannerPopupProps {
  onClose: () => void;
}

const QrScannerPopup: React.FC<QrScannerPopupProps> = ({ onClose }) => {
  const [scanned, setScanned] = useState(false);

  const handleSimulateScan = () => {
    setScanned(true);

    // Auto-close after 2.5s
    setTimeout(() => {
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-96 p-6 relative">
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
            <h2 className="text-lg font-bold mb-4 text-center">
              Scan Batch QR Code
            </h2>

            {/* Scanner Frame */}
            <div className="relative border-4 border-dashed border-gray-300 rounded-xl h-56 flex items-center justify-center mb-4 overflow-hidden">
              {/* Scanner Preview Text */}
              <p className="text-gray-400 text-sm absolute">Align QR Code Here</p>

              {/* Red scanning line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500 animate-scan"></div>
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
          <div className="text-center py-10">
            <h2 className="text-lg font-bold text-green-700 mb-2">
              ✅ QR Code Scanned!
            </h2>
            <p className="text-gray-600">
              Batch ID <b>B2023-09-15-001</b> recognized.
            </p>
          </div>
        )}
      </div>

      {/* Animation for scanning line */}
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
