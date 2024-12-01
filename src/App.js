import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Training from './Training';
import Cabinet from './cabinet';
import CompanyRegistration from './CompanyRegistration';
import Upload from './Upload';
import Compte from './Compte';

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="ml-64 w-full">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/training" element={<Training />} />
            <Route path="/cabinet" element={<Cabinet />} />
            <Route path="/company-registration" element={<CompanyRegistration />} /> 
            <Route path="/upload" element={<Upload />} />   
            <Route path="/compte" element={<Compte />} />   
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
