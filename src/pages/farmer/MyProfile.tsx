import React, { useState, type ChangeEvent } from "react";
import { FaPlus, FaUserCircle } from "react-icons/fa";
import ChangePasswordPopup from "../../components/logistic/profile/ChangePasswordPopup";
import profileDemoPic from "../../assets/profilepicdemo.jpg"; // ✅ import your default image

interface ProfileFormData {
  name: string;
  email: string;
  phone: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  farmName: string;
  farmSize: string;
  primaryCrops: string;
  certifications: string;
  contactEmail: boolean;
  contactSMS: boolean;
}

const FarmerProfile: React.FC = () => {
  const [formData, setFormData] = useState<ProfileFormData>({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    farmName: "",
    farmSize: "",
    primaryCrops: "",
    certifications: "",
    contactEmail: true,
    contactSMS: false,
  });

  // ✅ default profile pic is your asset
  const [profilePic, setProfilePic] = useState<string>(profileDemoPic);
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
      setProfilePic(imageUrl); // ✅ replace default with uploaded
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
          <h1 className="text-3xl font-bold">Profile Settings</h1>
          <p className="text-gray-600">
            Manage your personal and farm information.
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
              className="border rounded-md p-2"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="border rounded-md p-2"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="border rounded-md p-2"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Farm Location */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Farm Location</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="address1"
              placeholder="Address Line 1"
              className="border rounded-md p-2"
              value={formData.address1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address2"
              placeholder="Address Line 2"
              className="border rounded-md p-2"
              value={formData.address2}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="border rounded-md p-2"
              value={formData.city}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State/Province"
              className="border rounded-md p-2"
              value={formData.state}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              className="border rounded-md p-2"
              value={formData.postalCode}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="border rounded-md p-2"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Farm Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Farm Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="farmName"
              placeholder="Farm Name"
              className="border rounded-md p-2"
              value={formData.farmName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="farmSize"
              placeholder="Farm Size (e.g., 100 acres)"
              className="border rounded-md p-2"
              value={formData.farmSize}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="primaryCrops"
              placeholder="Primary Crops"
              className="border rounded-md p-2"
              value={formData.primaryCrops}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="certifications"
              placeholder="Certifications"
              className="border rounded-md p-2"
              value={formData.certifications}
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
              name="contactSMS"
              checked={formData.contactSMS}
              onChange={handleInputChange}
              className="h-5 w-5 accent-black"
            />
            SMS Notifications
          </label>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={() => setShowChangePassword(true)}
            className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
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

export default FarmerProfile;
