import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar: React.FC<{
  search: string;
  setSearch: (val: string) => void;
}> = ({ search, setSearch }) => (
  <div className="relative max-w-xl mb-10">
    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
    <input
      type="text"
      placeholder="Search farmer FAQs..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full pl-10 pr-4 py-3 border rounded-md shadow-sm bg-gray-50 focus:ring-2 focus:ring-[#0f1d3a] focus:outline-none"
    />
  </div>
);

export default SearchBar;
