import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

interface ReportIssuePopupProps {
  onClose: () => void;
}

const ReportIssuePopup: React.FC<ReportIssuePopupProps> = ({ onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [issue, setIssue] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = () => {
    if (!issue.trim()) return; // Require at least issue type
    setSubmitted(true);

    // Auto close after 2 seconds (optional)
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-[2px] flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-xl w-96 transform translate-x-12 relative">
        {/* X Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <IoClose size={22} />
        </button>

        {!submitted ? (
          <>
            {/* Title */}
            <h2 className="text-lg font-bold mb-3">Report an Issue</h2>
            <p className="text-gray-600 mb-4">
              Please describe the issue you encountered during transit.
            </p>

            {/* Issue Type */}
            <label className="block text-sm font-medium mb-1">Issue Type</label>
            <input
              type="text"
              placeholder="e.g., Vehicle breakdown"
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              className="w-full border rounded-md p-2 mb-4 text-sm"
            />

            {/* Details */}
            <label className="block text-sm font-medium mb-1">Details</label>
            <textarea
              placeholder="Provide additional details..."
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full border rounded-md p-2 mb-4 text-sm"
              rows={3}
            />

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-[#0f1d3a] text-white rounded-md hover:bg-[#1b1e23]"
              >
                Submit
              </button>
            </div>
          </>
        ) : (
          // ✅ Success Message
          <div className="text-center">
            <h2 className="text-lg font-bold text-green-700 mb-2">
              Issue Reported!
            </h2>
            <p className="text-gray-600">
              Your report has been successfully submitted.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportIssuePopup;
