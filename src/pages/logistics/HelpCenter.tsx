
import React, { useState } from "react";
import Header from "../../components/logistic/help/ Header";
import SearchBar from "../../components/logistic/help/SearchBar";
import QuickAccess from "../../components/logistic/help/QuickAccess";
import FAQSection from "../../components/logistic/help/FAQSection";
import ContactSupport from "../../components/logistic/help/ContactSupport";

const HelpCenter: React.FC = () => {
  const [search, setSearch] = useState("");

  const faqs = [
    {
      q: "How do I update shipment status?",
      a: "Go to 'Logistics Dashboard' → click 'Scan & Update Batch Status' → select your batch and update.",
    },
    {
      q: "How can I view my past shipments?",
      a: "Navigate to 'Shipment History' from the sidebar.",
    },
    {
      q: "What should I do if my batch is delayed?",
      a: "Use 'Update Status' → select the batch → click 'Report an Issue'.",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <QuickAccess />
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Frequently Asked Questions
      </h2>
      <FAQSection faqs={faqs} search={search} />
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Contact Support
      </h2>
      <ContactSupport />
    </div>
  );
};

export default HelpCenter;
