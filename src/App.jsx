import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Categories from "./components/Categories";
import ChooseUs from "./components/ChooseUs";
import HowItWorks from "./components/HowItWorks";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./Homepage";
// import homepage from "./homepage/homepage";


const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories />
                <ChooseUs />
                <HowItWorks />
              </>
            }
          />
          
          {/* Login Page */}
          <Route path="/login" element={<Login />} />

          {/* Signup Page */}
          <Route path="/signup" element={<Signup />} />
          <Route path ="/Homepage" element={<Homepage />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
