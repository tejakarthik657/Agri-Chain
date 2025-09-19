import React from "react";

export default function NotificationPagination({
  currentPage,
  totalPages,
  onPageChange,
}: {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md disabled:opacity-50 hover:bg-gray-200"
      >
        Prev
      </button>

      <span className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md disabled:opacity-50 hover:bg-gray-200"
      >
        Next
      </button>
    </div>
  );
}
