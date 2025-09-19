import React from "react";
import { FiX } from "react-icons/fi";

interface MessagePopupProps {
  message: string;
  onClose: () => void;
}

const MessagePopup: React.FC<MessagePopupProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
      <div className="bg-white shadow-xl rounded-lg px-6 py-5 border border-gray-200 text-center w-[340px] relative">
        {/* ❌ Close (X) button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <FiX className="text-lg" />
        </button>

        {/* Message */}
        <p className="text-sm font-medium text-gray-800">{message}</p>

        {/* Close Button (bottom) */}
        <button
          onClick={onClose}
          className="mt-4 text-xs text-gray-600 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default MessagePopup;
