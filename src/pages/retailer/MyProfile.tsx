import React, { useState, type ChangeEvent } from "react";
import { FaPlus, FaUserCircle } from "react-icons/fa";
import ChangePasswordPopup from "../../components/retailercomp/profile/ChangePasswordPopup";

interface RetailerProfileForm {
  name: string;
  email: string;
  phone: string;
  storeName: string;
  storeType: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  contactEmail: boolean;
  contactPhone: boolean;
  contactApp: boolean;
}

const RetailerProfile: React.FC = () => {
  const [formData, setFormData] = useState<RetailerProfileForm>({
    name: "",
    email: "",
    phone: "",
    storeName: "",
    storeType: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    contactEmail: true,
    contactPhone: false,
    contactApp: true,
  });

  const [profilePic, setProfilePic] = useState<string>("");
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessPopup(true);
    setTimeout(() => setShowSuccessPopup(false), 2000);
  };

  return (
    <div className="flex-1 p-8 bg-white min-h-screen">
      {/* Page Title */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold">Retailer Profile</h1>
          <p className="text-gray-600">
            Manage your personal and store information.
          </p>
        </div>
        <div className="relative">
          {profilePic ? (
            <img
              src={profilePic}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-gray-200 shadow-md object-cover"
            />
          ) : (
            <FaUserCircle className="w-28 h-28 text-gray-400" />
          )}
          <label className="absolute bottom-1 right-1 bg-[#1c2536] p-2 rounded-full text-white cursor-pointer">
            <FaPlus size={12} />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageUpload}
            />
          </label>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-10 max-w-4xl">
        {/* Personal Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="border rounded-md p-2 focus:outline-none focus:border-gray-400"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border rounded-md p-2 focus:outline-none focus:border-gray-400"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="border rounded-md p-2 focus:outline-none focus:border-gray-400"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Store Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Store Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="storeName"
              placeholder="Store Name"
              className="border rounded-md p-2 focus:outline-none focus:border-gray-400"
              value={formData.storeName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="storeType"
              placeholder="Store Type (e.g., Grocery, Wholesale)"
              className="border rounded-md p-2 focus:outline-none focus:border-gray-400"
              value={formData.storeType}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="border rounded-md p-2 focus:outline-none focus:border-gray-400"
              value={formData.address}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="border rounded-md p-2 focus:outline-none focus:border-gray-400"
              value={formData.city}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State / Province"
              className="border rounded-md p-2 focus:outline-none focus:border-gray-400"
              value={formData.state}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              className="border rounded-md p-2 focus:outline-none focus:border-gray-400"
              value={formData.postalCode}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="border rounded-md p-2 focus:outline-none focus:border-gray-400"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Contact Preferences */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Preferences</h3>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="contactEmail"
              checked={formData.contactEmail}
              onChange={handleInputChange}
              className="h-5 w-5 accent-black"
            />
            Email
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="contactPhone"
              checked={formData.contactPhone}
              onChange={handleInputChange}
              className="h-5 w-5 accent-black"
            />
            Phone
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="contactApp"
              checked={formData.contactApp}
              onChange={handleInputChange}
              className="h-5 w-5 accent-black"
            />
            App Notifications
          </label>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setShowChangePassword(true)}
            className="px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 font-semibold"
          >
            Change Password
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#0b0f16] text-white rounded-md hover:bg-[#2a3447]"
          >
            Save Changes
          </button>
        </div>
      </form>

      {/* Change Password Popup */}
      {showChangePassword && (
        <ChangePasswordPopup onClose={() => setShowChangePassword(false)} />
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 shadow-2xl w-96 text-center relative">
            <button
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100">
                <span className="text-2xl">✓</span>
              </div>
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Changes Saved!
            </h2>
            <p className="text-gray-600 text-sm">
              Your profile has been updated successfully.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RetailerProfile;
