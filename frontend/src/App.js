import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import OfficerLoginPage from './pages/OfficerLoginPage';
import RegisterDocumentPage from './pages/RegisterDocumentPage';
import VerifyDocumentPage from './pages/VerifyDocumentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OfficerLoginPage />} />
        <Route path="/register" element={<RegisterDocumentPage />} />
        <Route path="/verify" element={<VerifyDocumentPage />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
