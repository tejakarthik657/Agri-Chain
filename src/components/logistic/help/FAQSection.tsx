import React from "react";

interface FAQ {
  q: string;
  a: string;
}

const FAQSection: React.FC<{ faqs: FAQ[]; search: string }> = ({
  faqs,
  search,
}) => {
  const filteredFaqs = faqs.filter((f) =>
    f.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-4 mb-12">
      {filteredFaqs.length > 0 ? (
        filteredFaqs.map((faq, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow">
            <h3 className="font-medium text-gray-800">{faq.q}</h3>
            <p className="text-sm text-gray-600 mt-1">{faq.a}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-500 italic">No results found.</p>
      )}
    </div>
  );
};

export default FAQSection;
