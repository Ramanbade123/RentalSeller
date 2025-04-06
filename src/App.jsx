import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import { Outlet } from "react-router-dom";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <div className={`w-full roboto-condensed-medium overflow-hidden relative transition-all duration-500 ease-in-out 
        ${isCartOpen ? "pr-[25%]" : "pr-0"}`}>
      <NavBar toggleCart={toggleCart} />
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
