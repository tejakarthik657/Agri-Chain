import React, { useState, ChangeEvent } from "react";
import profilepicdemo from "../../assets/profilepicdemo.jpg";

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

const ProfilePage: React.FC = () => {
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
    contactEmail: false,
    contactSMS: false,
  });

  const [profilePic, setProfilePic] = useState<string>(profilepicdemo);

  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [passwords, setPasswords] = useState({
    current: "",
    newPass: "",
  });

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

  const handleSaveChanges = () => {
    // Check if all required fields are filled
    const allFilled = Object.entries(formData).every(([key, value]) => {
      if (typeof value === "boolean") return true; // skip checkboxes
      return value.trim() !== "";
    });

    if (allFilled) {
      alert("✅ Changes saved successfully!");
    } else {
      alert("⚠️ Please fill all fields before saving.");
    }
  };

  const handlePasswordReset = () => {
    if (!passwords.current || !passwords.newPass) {
      alert("⚠️ Please enter both current and new password.");
      return;
    }
    alert("🔑 Password reset successful!");
    setShowPasswordPopup(false);
    setPasswords({ current: "", newPass: "" });
  };

  return (
    <div className="flex-1 p-8 bg-white relative min-h-screen">
      {/* Top Right Profile Pic */}
      <div className="absolute top-6 right-6 flex flex-col items-center gap-3">
        <label className="cursor-pointer relative">
          <img
            src={profilePic}
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-gray-300 shadow-lg object-cover"
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <span className="absolute bottom-1 right-2 bg-[#1c2536] text-white text-lg px-3 py-0.5 rounded-full">
            +
          </span>
        </label>

        {/* Change Password Button under profile pic */}
        <button
          type="button"
          className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          onClick={() => setShowPasswordPopup(true)}
        >
          Change Password
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-8">Manage Profile</h1>

      <form className="space-y-6 max-w-3xl">
        {/* Personal Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            className="w-[70%] border rounded-md p-2 mb-3"
            value={formData.name}
            onChange={handleInputChange}
          />

          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            className="w-[70%] border rounded-md p-2 mb-3"
            value={formData.email}
            onChange={handleInputChange}
          />

          <label className="block font-medium">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="w-[70%] border rounded-md p-2 mb-3"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        {/* Farm Location */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Farm Location</h3>
          <label className="block font-medium">Address Line 1</label>
          <input
            type="text"
            name="address1"
            className="w-[70%] border rounded-md p-2 mb-3"
            value={formData.address1}
            onChange={handleInputChange}
          />

          <label className="block font-medium">Address Line 2</label>
          <input
            type="text"
            name="address2"
            className="w-[70%] border rounded-md p-2 mb-3"
            value={formData.address2}
            onChange={handleInputChange}
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium">City</label>
              <input
                type="text"
                name="city"
                className="w-[70%] border rounded-md p-2 mb-3"
                value={formData.city}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block font-medium">State/Province</label>
              <input
                type="text"
                name="state"
                className="w-[70%] border rounded-md p-2 mb-3"
                value={formData.state}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <label className="block font-medium">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                className="w-[70%] border rounded-md p-2 mb-3"
                value={formData.postalCode}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block font-medium">Country</label>
              <input
                type="text"
                name="country"
                className="w-[70%] border rounded-md p-2 mb-3"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* Farm Details */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Farm Details</h3>
          <label className="block font-medium">Farm Name</label>
          <input
            type="text"
            name="farmName"
            className="w-[70%] border rounded-md p-2 mb-3"
            value={formData.farmName}
            onChange={handleInputChange}
          />

          <label className="block font-medium">Farm Size (acres)</label>
          <input
            type="text"
            name="farmSize"
            className="w-[70%] border rounded-md p-2 mb-3"
            value={formData.farmSize}
            onChange={handleInputChange}
          />

          <label className="block font-medium">Primary Crops Grown</label>
          <input
            type="text"
            name="primaryCrops"
            className="w-[70%] border rounded-md p-2 mb-3"
            value={formData.primaryCrops}
            onChange={handleInputChange}
          />

          <label className="block font-medium">Certifications</label>
          <input
            type="text"
            name="certifications"
            className="w-[70%] border rounded-md p-2 mb-3"
            value={formData.certifications}
            onChange={handleInputChange}
          />
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
            />
            Email
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="contactSMS"
              checked={formData.contactSMS}
              onChange={handleInputChange}
            />
            SMS Notifications
          </label>
        </div>

        {/* Save Changes Button */}
        <div className="mt-6">
          <button
            type="button"
            className="px-4 py-2 bg-[#1c2536] text-white rounded-md hover:bg-[#2c3b52]"
            onClick={handleSaveChanges}
          >
            Save Changes
          </button>
        </div>
      </form>

      {/* Password Popup */}
      {showPasswordPopup && (
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-xl border w-96 z-50">
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>

          <label className="block mb-2">Current Password</label>
          <input
            type="password"
            className="w-full border rounded-md p-2 mb-3"
            value={passwords.current}
            onChange={(e) =>
              setPasswords((prev) => ({ ...prev, current: e.target.value }))
            }
          />

          <label className="block mb-2">New Password</label>
          <input
            type="password"
            className="w-full border rounded-md p-2 mb-4"
            value={passwords.newPass}
            onChange={(e) =>
              setPasswords((prev) => ({ ...prev, newPass: e.target.value }))
            }
          />

          <div className="flex justify-end gap-3">
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              onClick={() => setShowPasswordPopup(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-[#1c2536] text-white rounded-md hover:bg-[#2c3b52]"
              onClick={handlePasswordReset}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
