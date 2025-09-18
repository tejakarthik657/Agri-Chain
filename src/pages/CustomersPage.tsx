import React from 'react';
import { Link } from 'react-router-dom';

const CustomersPage: React.FC = () => {
  return (
    // Converted from .info-page
    <div className="flex justify-center items-center min-h-screen p-5">
      {/* Converted from .info-container */}
      <div className="relative text-center w-full max-w-lg bg-navy-light py-10 px-12 rounded-xl shadow-2xl">
        {/* Converted from .back-link */}
        <Link to="/" className="absolute top-5 left-5 text-gray-400 hover:text-gray-100 transition-colors">
          &larr; Back to Home
        </Link>
        
        <h1 className="text-5xl font-bold text-blue-400 mb-4">Customers</h1>
        <p className="text-lg text-gray-400 leading-relaxed">
          Welcome to our customer portal. Explore products, track orders, and discover the best from our network of farmers and retailers.
        </p>
      </div>
    </div>
  );
};

export default CustomersPage;