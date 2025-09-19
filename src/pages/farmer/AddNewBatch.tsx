import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/* --- Upload Section --- */
function UploadBox({ file, setFile }) {
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="mb-6 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center w-full">
      <p className="text-sm mb-2">Upload Photo or Video</p>
      <input
        type="file"
        id="fileUpload"
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <label
        htmlFor="fileUpload"
        className="cursor-pointer bg-gray-200 px-4 py-2 text-sm rounded-md hover:bg-gray-300"
      >
        Upload
      </label>
      {file && <p className="text-xs mt-2 text-gray-600">{file.name}</p>}
    </div>
  );
}

/* --- Calendar Picker --- */
function CalendarPicker({ date, setDate }) {
  return (
    <div className="mb-6 w-full">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Harvest Date <span className="text-red-500">*</span>
      </label>
      <DatePicker
        selected={date}
        onChange={(newDate) => setDate(newDate)}
        dateFormat="dd-MM-yyyy"
        className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

/* --- Main Harvest Form --- */
export default function HarvestForm() {
  const [produce, setProduce] = useState("");
  const [variety, setVariety] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState(null);
  const [file, setFile] = useState(null);

  // ✅ popup state
  const [popup, setPopup] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleSubmit = () => {
    if (produce && quantity && unit && date) {
      setPopup({
        type: "success",
        message: "🎉 Congratulations! New harvest batch has been added.",
      });

      // reset
      setProduce("");
      setVariety("");
      setQuantity("");
      setUnit("");
      setDate(null);
      setFile(null);
    } else {
      setPopup({
        type: "error",
        message: "⚠️ Please fill in all required fields.",
      });
    }

    // auto close after 2s
    setTimeout(() => setPopup(null), 2000);
  };

  return (
    <div className="w-full px-10 py-8">
      <h2 className="text-2xl font-semibold mb-8">Register a New Harvest</h2>

      {/* Produce Type */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Produce Type <span className="text-red-500">*</span>
        </label>
        <select
          value={produce}
          onChange={(e) => setProduce(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select</option>
          <option>Tomatoes</option>
          <option>Lettuce</option>
          <option>Peppers</option>
        </select>
      </div>

      {/* Variety */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Variety (Optional)
        </label>
        <input
          type="text"
          placeholder="Enter Variety"
          value={variety}
          onChange={(e) => setVariety(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Quantity */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Quantity <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          placeholder="Enter Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Unit */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Unit <span className="text-red-500">*</span>
        </label>
        <select
          value={unit}
          onChange={(e) => setUnit(e.target.value)}
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select</option>
          <option>Kg</option>
          <option>Lbs</option>
          <option>Boxes</option>
        </select>
      </div>

      <CalendarPicker date={date} setDate={setDate} />

      <UploadBox file={file} setFile={setFile} />

      {/* Submit Button */}
      <div className="flex justify-end mt-8">
        <button
          onClick={handleSubmit}
          className="bg-[#1c2536] text-white px-6 py-2 rounded-md hover:bg-[#111827] text-sm"
        >
          Next
        </button>
      </div>

      {/* ✅ Custom Popup */}
      {popup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-2xl w-96 text-center relative">
            <button
              onClick={() => setPopup(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <div className="flex items-center justify-center mb-4">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${
                  popup.type === "success" ? "bg-green-100" : "bg-red-100"
                }`}
              >
                <span
                  className={`text-2xl ${
                    popup.type === "success" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {popup.type === "success" ? "✓" : "⚠"}
                </span>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {popup.type === "success" ? "Changes Saved!" : "Error"}
            </h2>
            <p className="text-gray-600 text-sm">{popup.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}
