// import React from "react";

// interface RejectReportPopupProps {
//   onClose: () => void;
// }

// const RejectReportPopup: React.FC<RejectReportPopupProps> = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-lg w-96 p-6">
//         <h2 className="text-lg font-bold mb-4 text-center">Reject / Report Issue</h2>
//         <textarea
//           placeholder="Describe the issue (e.g., damaged produce, incorrect batch)..."
//           className="w-full border rounded-md p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#0f1d3a]"
//           rows={4}
//         ></textarea>
//         <div className="flex justify-end gap-3">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={onClose}
//             className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//           >
//             Submit Issue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RejectReportPopup;

import React from "react";

interface RejectReportPopupProps {
  onClose: () => void;
  onConfirm: () => void;
}

const RejectReportPopup: React.FC<RejectReportPopupProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-lg font-bold mb-4">Reject or Report Issue</h2>
        <p className="text-sm text-gray-600 mb-6">
          Are you sure you want to reject this delivery or report an issue?
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default RejectReportPopup;
