import React from "react";
import { FiPhone, FiMail, FiMessageCircle } from "react-icons/fi";

const ContactSupport: React.FC = () => (
  <div id="contact" className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center">
      <FiPhone className="text-[#0f1d3a] w-6 h-6 mb-2" />
      <p className="font-medium">Phone</p>
      <p className="text-sm text-gray-500">+1 (800) 123-4567</p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center">
      <FiMail className="text-[#0f1d3a] w-6 h-6 mb-2" />
      <p className="font-medium">Email</p>
      <p className="text-sm text-gray-500">support@logistics.com</p>
    </div>
    <div className="p-6 bg-white rounded-lg shadow flex flex-col items-center">
      <FiMessageCircle className="text-[#0f1d3a] w-6 h-6 mb-2" />
      <p className="font-medium">Live Chat</p>
      <p className="text-sm text-gray-500">Available 9AM – 6PM</p>
    </div>
  </div>
);

export default ContactSupport;
