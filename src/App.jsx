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
// import SellerLogin from "./pages/Sellerlogin";
// import SellerRegister from "./pages/Sellerregister";
import AuthLayout from "./Layout/Authlayout";
import DashboardLayout from "./Layout/DashboardLayout";
import ProductDetails from "./pages/ProductDetails";
// import ForgotPassword from "./pages/ForgotPassword";
import ListingsPage from "./pages/ListingsPage";
// import Homepage from "./pages/Homepage";
// import HowItWorks from "./pages/HowItWorks";
// import MobileDetails from "./pages/MobileDetails";
// // Import new product category pages
// import SmartphonesPage from "./pages/SmartphonesPage";
// import LaptopsPage from "./pages/LaptopsPage";
// import CamerasPage from "./pages/CamerasPage";
// import SmartwatchesPage from "./pages/SmartwatchesPage";
// import Products from "./pages/Products";
import AnalyticsPage from "./pages/AnalyticsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<AuthLayout />}>
          {/* Authentication Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/landingpage" element={<Homepage />} /> */}
          {/* <Route path="/howitworks" element={<HowItWorks />} /> */}
          {/* <Route path="/mobile-details" element={<MobileDetails />} /> */}
          {/* <Route path="/login" element={<SellerLogin />} /> */}
          {/* <Route path="/register" element={<SellerRegister />} /> */}
          {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}

          {/* <Route path="/products/smartphones" element={<SmartphonesPage />} />
          <Route path="/products/laptops" element={<LaptopsPage />} />
          <Route path="/products/cameras" element={<CamerasPage />} />
          <Route path="/products/smartwatches" element={<SmartwatchesPage />} />
          <Route path="/products" element={<Products/>}/> */}
         </Route>

        <Route element={<DashboardLayout />}>

          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/upload-images" element={<Uploadimage />} />
          <Route path="/finalize" element={<Finalize />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Route>
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="/analytics" element={<AnalyticsPage/>}/>
        {/* Default route - redirect to landing page */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;