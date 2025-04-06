import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Uploadimage from "./pages/Uploadimage";
import Finalize from "./pages/finalize";
import Confirmation from "./pages/Confirmation";
import Dashboard from "./pages/Dashboard";
import SellerLogin from "./pages/Sellerlogin";
import SellerRegister from "./pages/Sellerregister";
import AuthLayout from "./Layout/Authlayout";
import DashboardLayout from "./Layout/DashboardLayout";
import ProductDetails from "./pages/ProductDetails";
import ForgotPassword from "./pages/ForgotPassword";
import ListingsPage from "./pages/ListingsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          {/* Authentication Routes */}
          <Route path="/login" element={<SellerLogin />} />
          <Route path="/register" element={<SellerRegister />} />
          <Route path="/forgot-password" element ={<ForgotPassword/>}/>
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/listings" element={<ListingsPage/>}/>
          <Route path="/productdetails" element={<ProductDetails/>} />
          <Route path="/upload-images" element={<Uploadimage />} />
          <Route path="/finalize" element={<Finalize />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Route>

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
