// import React from "react";

// interface AcceptPopupProps {
//   onClose: () => void;
// }

// const AcceptPopup: React.FC<AcceptPopupProps> = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg shadow-lg w-96 p-6">
//         <h2 className="text-lg font-bold mb-4 text-center">Confirm Delivery</h2>
//         <p className="text-gray-600 mb-6 text-center">
//           Are you sure you want to <b>accept and confirm</b> this delivery?  
//           Once confirmed, it will be marked as{" "}
//           <span className="text-green-600 font-semibold">Delivered</span>.
//         </p>
//         <div className="flex justify-end gap-3">
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
//             Confirm
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AcceptPopup;

import React from "react";

interface AcceptPopupProps {
  onClose: () => void;
  onConfirm: () => void;
}

const AcceptPopup: React.FC<AcceptPopupProps> = ({ onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96">
        <h2 className="text-lg font-bold mb-4">Confirm Delivery</h2>
        <p className="text-sm text-gray-600 mb-6">
          Do you want to <b>accept and confirm</b> this delivery? Once confirmed,
          it will be marked as <span className="text-green-600 font-semibold">Delivered</span>.
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
            className="px-4 py-2 bg-[#0f1d3a] text-white rounded-md hover:bg-[#1b1e23]"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptPopup;
