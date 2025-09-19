import React, { useState } from "react";
import Header from "../../components/retailercomp/help/Header";
import SearchBar from "../../components/retailercomp/help/SearchBar";
import QuickAccess from "../../components/retailercomp/help/QuickAccess";
import FAQSection from "../../components/retailercomp/help/FAQSection";
import ContactSupport from "../../components/retailercomp/help/ContactSupport";

const RetailerHelpCenter: React.FC = () => {
  const [search, setSearch] = useState("");

  const faqs = [
    {
      q: "How do I add a new product to my store?",
      a: "Go to 'Product Management' → click 'Add Product' → fill in details and save.",
    },
    {
      q: "How can I track my sales performance?",
      a: "Navigate to 'Sales Dashboard' from the sidebar to view reports and analytics.",
    },
    {
      q: "What should I do if my product stock is low?",
      a: "Go to 'Inventory Management' → select the product → click 'Restock'.",
    },
    {
      q: "How do I handle customer returns?",
      a: "Go to 'Orders' → select the order → click 'Process Return' to initiate.",
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

export default RetailerHelpCenter;
