import React, { useState } from "react";
import { FiX } from "react-icons/fi";

interface ChangePasswordPopupProps {
  onClose: () => void;
}

const ChangePasswordPopup: React.FC<ChangePasswordPopupProps> = ({ onClose }) => {
  const [current, setCurrent] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleUpdate = () => {
    if (newPassword !== confirm) {
      setError("New passwords do not match.");
      return;
    }
    setError("");
    setSuccess(true);

    // Auto-close after success
    setTimeout(() => {
      onClose();
    }, 2000);
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

        {!success ? (
          <>
            <h2 className="text-lg font-bold mb-4 text-center">Change Password</h2>

            <div className="space-y-3">
              <input
                type="password"
                placeholder="Current Password"
                value={current}
                onChange={(e) => setCurrent(e.target.value)}
                className="w-full mb-3 px-3 py-2 border rounded-md 
             focus:outline-none focus:ring-0 focus:border-gray-300"
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full mb-3 px-3 py-2 border rounded-md 
             focus:outline-none focus:ring-0 focus:border-gray-300"
              />
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                  className="w-full mb-3 px-3 py-2 border rounded-md 
             focus:outline-none focus:ring-0 focus:border-gray-300"
              />
            </div>

            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdate}
                className="px-4 py-2 bg-[#0f1d3a] text-white rounded-md hover:bg-[#1b1e23]"
              >
                Update Password
              </button>
            </div>
          </>
        ) : (
          // ✅ Success Message
          <div className="text-center py-6">
            <h2 className="text-lg font-bold text-green-700 mb-2">
              ✅ Password Updated!
            </h2>
            <p className="text-gray-600">Your password has been changed.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangePasswordPopup;
