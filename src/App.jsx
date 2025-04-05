import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Description from "./components/Description";
import Uploadimage from './components/Uploadimage';
import Finalize from './components/Finalize';
import Confirmation from './components/Confirmation';
import Dashboard from './pages/Dashboard';
import SellerLogin from './pages/Sellerlogin';
import SellerRegister from './pages/Sellerregister';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Authentication Routes */}
        <Route path="/login" element={<SellerLogin />} />
        <Route path="/register" element={<SellerRegister />} />
        
        {/* Main form flow routes */}
        <Route path="/description" element={<Description />} />
        <Route path="/upload-images" element={<Uploadimage />} />
        <Route path="/finalize" element={<Finalize />} />
        <Route path="/confirmation" element={<Confirmation />} />
        
        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Default route - redirect to login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;