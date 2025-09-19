import React, { useState } from "react";
import Header from "../../components/farmer/farmer/help/Header";
import SearchBar from "../../components/farmer/farmer/help/SearchBar";
import QuickAccess from "../../components/farmer/farmer/help/QuickAccess";
import ContactSupport from "../../components/farmer/farmer/help/ContactSupport";

const HelpCenter: React.FC = () => {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "How do I upload a new crop batch?",
      a: "Go to 'My Batches' → click 'Add New Batch' → enter crop details, quantity, and expected pickup date.",
    },
    {
      q: "How can I track my shipments?",
      a: "Navigate to 'Batches' → select your crop → view real-time shipment updates.",
    },
    {
      q: "When will I receive payment for delivered crops?",
      a: "Payments are processed within 3–5 working days after successful delivery.",
    },
    {
      q: "What should I do if my batch is delayed?",
      a: "Use 'Report Issue' in the batch details page to notify logistics support.",
    },
    {
      q: "Can I store my produce in the warehouse?",
      a: "Yes, you can request storage while creating or updating your batch under 'Warehouse Options'.",
    },
    {
      q: "How do I update my profile details?",
      a: "Go to 'Settings' → 'Profile' → edit your information and save changes.",
    },
    {
      q: "What crops are currently in high demand?",
      a: "Check the 'Market Insights' section under Dashboard for trending crops and prices.",
    },
  ];

  // filter by search text
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(search.toLowerCase()) ||
      faq.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <QuickAccess />

      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3 mb-8">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-800">{faq.q}</p>
                <span className="text-gray-500">
                  {openIndex === i ? "−" : "+"}
                </span>
              </div>
              {openIndex === i && (
                <p className="mt-2 text-sm text-gray-600">{faq.a}</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No FAQs match your search.</p>
        )}
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Contact Support
      </h2>
      <ContactSupport />
    </div>
  );
};

export default HelpCenter;
