import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useContext } from "react";

import "./App.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Banner from "./components/Banner/Banner";
import ProductRequest from "./components/ProductRequest/ProductRequest";
import NavBar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Admin from "./components/Admin/Admin";
import { CartProvider } from "./components/Shop/CartContext";
import { ThemeContext } from "./ThemeContext";
import { AuthContext } from "./components/Contexts/AuthContext";
import Employee from "./components/Admin/Employee";

function App() {
  const { darkMode } = useContext(ThemeContext);
  const { userType } = useContext(AuthContext);
  return (
    <div className={`App ${darkMode ? "dark-mode" : "light-mode"}`}>
      <CartProvider>
        <Router>
          <NavBar />

          <Routes>
            <Route path="/" exact Component={Banner} />
            <Route path="/products" exact Component={Dashboard} />
            <Route path="/admin" exact Component={Admin} />

            {userType === "admin" && (
              <Route path="/admin" exact Component={Admin} />
            )}
            {userType === "employee" && (
              <Route path="/employee" exact Component={Employee} />
            )}
            <Route path="/contact-us" exact Component={ProductRequest} />
            <Route path="/shop" exact Component={Shop} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
