import React, { useState, createContext } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Banner from "./components/Banner/Banner";
import ProductRequest from "./components/ProductRequest/ProductRequest";
import NavBar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Admin from "./components/Admin/Admin";

export const CartContext = createContext();

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="App">
      <CartContext.Provider
        value={{
          cartItems: cartItems,
          addToCart: addToCart,
          removeFromCart: removeFromCart,
          clearCart: clearCart,
        }}
      >
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact Component={Banner} />
            <Route path="/products" exact Component={Dashboard} />
            <Route path="/admin" exact Component={Admin } />
            <Route path="/contact-us" exact Component={ProductRequest} />
            <Route path="/shop" exact Component={Shop} />
          </Routes>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;
