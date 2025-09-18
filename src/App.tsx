import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CustomersPage from './pages/CustomersPage';

// CRITICAL: This line imports the styles from src/index.css
import './index.css'; 

const App: React.FC = () => {
  return (
    // CRITICAL: This class name "bg-navy" directly corresponds to the 'navy' key 
    // you defined in your tailwind.config.js.
    <div className="bg-navy text-gray-200 font-sans min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login/:role" element={<LoginPage />} />
          <Route path="/customers" element={<CustomersPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;