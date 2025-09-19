
// import React, { useState } from "react";
// import { BiQrScan } from "react-icons/bi";
// import RejectReportPopup from "../../components/retailers/RecieveVerify/RejectReportPopup";
// import AcceptPopup from "../../components/retailers/RecieveVerify/acceptPopup";
// import QrScannerPopup from "../../components/retailers/QrScannerPopup";

// const ReceiveVerify: React.FC = () => {
//   const [popup, setPopup] = useState<string | null>(null);
//   const [qrOpen, setQrOpen] = useState(false);
//   const [batchId, setBatchId] = useState("TMT001");
//   const [message, setMessage] = useState<string | null>(null); // ✅ confirmation messages

//   return (
//     <div className="p-8 bg-gray-50 min-h-screen relative">
//       {/* Page Header */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-2xl font-bold text-gray-800">
//           Verifying Delivery: Batch {batchId}
//         </h1>

//         {/* QR Scanner Icon */}
//         <button
//           onClick={() => setQrOpen(true)}
//           className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 shadow-md"
//           title="Scan Batch QR"
//         >
//           <BiQrScan className="text-2xl text-[#0f1d3a]" />
//         </button>
//       </div>

//       {/* Verification Details */}
//       <h2 className="text-lg font-semibold mb-4">Verification Details</h2>
//       <div className="grid grid-cols-2 gap-8 mb-12 text-sm">
//         <div>
//           <p className="text-gray-500">Produce</p>
//           <p className="font-medium">Tomatoes</p>
//         </div>
//         <div>
//           <p className="text-gray-500">From</p>
//           <p className="font-medium">Farm Fresh</p>
//         </div>
//         <div>
//           <p className="text-gray-500">Distributor</p>
//           <p className="font-medium">AgriCorp</p>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex justify-center gap-4">
//         <button
//           onClick={() => setPopup("accept")}
//           className="px-6 py-2 text-sm font-semibold bg-[#0f1d3a] text-white rounded-md shadow hover:bg-[#1b1e23]"
//         >
//           Accept & Confirm Delivery
//         </button>
//         <button
//           onClick={() => setPopup("reject")}
//           className="px-6 py-2 text-sm font-semibold bg-gray-100 text-gray-800 rounded-md shadow hover:bg-gray-200"
//         >
//           Reject or Report Issue
//         </button>
//       </div>

//       {/* Popups */}
//       {popup === "accept" && (
//         <AcceptPopup
//           onClose={() => setPopup(null)}
//           onConfirm={() => {
//             setMessage("✓ Delivery accepted and confirmed!");
//             setPopup(null);
//           }}
//         />
//       )}

//       {popup === "reject" && (
//         <RejectReportPopup
//           onClose={() => setPopup(null)}
//           onConfirm={() => {
//             setMessage("✕ Delivery rejected or issue reported.");
//             setPopup(null);
//           }}
//         />
//       )}

//       {qrOpen && (
//         <QrScannerPopup
//           onClose={() => setQrOpen(false)}
//           onScan={(id: string) => {
//             setBatchId(id);
//              setMessage(`📦 Batch ${id} scanned successfully!`);
//             setQrOpen(false);
//           }}
//         />
//       )}
        
      

//       {/* ✅ Message Toast */}
//       {message && (
//         <div className="fixed bottom-6 right-6 bg-white shadow-lg rounded-lg px-4 py-3 border border-gray-200">
//           <p className="text-sm font-medium text-gray-800">{message}</p>
//           <button
//             onClick={() => setMessage(null)}
//             className="text-xs text-gray-600 mt-2 hover:underline"
//           >
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReceiveVerify;
import React, { useState } from "react";
import { BiQrScan } from "react-icons/bi";
import RejectReportPopup from "../../components/retailers/RecieveVerify/RejectReportPopup";
import AcceptPopup from "../../components/retailers/RecieveVerify/acceptPopup";
import QrScannerPopup from "../../components/retailers/QrScannerPopup";
import MessagePopup from "../../components/retailers/MessagePopup"; // ✅ new reusable popup

const ReceiveVerify: React.FC = () => {
  const [popup, setPopup] = useState<string | null>(null);
  const [qrOpen, setQrOpen] = useState(false);
  const [batchId, setBatchId] = useState("TMT001");
  const [message, setMessage] = useState<string | null>(null);

  return (
    <div className="p-8 bg-gray-50 min-h-screen relative">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">
          Verifying Delivery: Batch {batchId}
        </h1>

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
      <div className="grid grid-cols-2 gap-8 mb-12 text-sm">
        <div>
          <p className="text-gray-500">Produce</p>
          <p className="font-medium">Tomatoes</p>
        </div>
        <div>
          <p className="text-gray-500">From</p>
          <p className="font-medium">Farm Fresh</p>
        </div>
        <div>
          <p className="text-gray-500">Distributor</p>
          <p className="font-medium">AgriCorp</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => setPopup("accept")}
          className="px-6 py-2 text-sm font-semibold bg-[#0f1d3a] text-white rounded-md shadow hover:bg-[#1b1e23]"
        >
          Accept & Confirm Delivery
        </button>
        <button
          onClick={() => setPopup("reject")}
          className="px-6 py-2 text-sm font-semibold bg-gray-100 text-gray-800 rounded-md shadow hover:bg-gray-200"
        >
          Reject or Report Issue
        </button>
      </div>

      {/* Popups */}
      {popup === "accept" && (
        <AcceptPopup
          onClose={() => setPopup(null)}
          onConfirm={() => {
            setMessage("✓ Delivery accepted and confirmed!");
            setPopup(null);
          }}
        />
      )}
      {popup === "reject" && (
        <RejectReportPopup
          onClose={() => setPopup(null)}
          onConfirm={() => {
            setMessage("✗ Delivery rejected or issue reported.");
            setPopup(null);
          }}
        />
      )}
      {qrOpen && (
        <QrScannerPopup
          onClose={() => setQrOpen(false)}
          onScan={(id: string) => {
            setBatchId(id);
            setMessage(`📦 Batch ${id} scanned successfully!`);
            setQrOpen(false);
          }}
        />
      )}

      {/* ✅ Centralized Message Popup */}
      {message && <MessagePopup message={message} onClose={() => setMessage(null)} />}
    </div>
  );
};

export default ReceiveVerify;
