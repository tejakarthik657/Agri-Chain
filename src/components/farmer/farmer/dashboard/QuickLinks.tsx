import React from "react";
import { Link } from "react-router-dom";

interface QuickLink {
  name: string;
  href: string;
}

interface QuickLinksProps {
  links: QuickLink[];
}

const QuickLinks: React.FC<QuickLinksProps> = ({ links }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h2>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-gray-700 hover:text-blue-600 cursor-pointer"
          >
            <Link to={link.href} className="flex justify-between w-full">
              <span>{link.name}</span>
              <span>→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuickLinks;
