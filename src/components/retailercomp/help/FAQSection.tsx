import React from "react";

interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  search: string;
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs, search }) => {
  const filteredFaqs = faqs.filter((faq) =>
    faq.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mb-8">
      {filteredFaqs.length > 0 ? (
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="p-4 bg-white rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-gray-900">{faq.q}</h3>
              <p className="text-gray-600 mt-1">{faq.a}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default FAQSection;
