import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Banner from "./components/Banner/Banner";
import Dashboard from "./components/Dashboard/Dashboard";
import ProductRequest from "./components/ProductRequest/ProductRequest";
import NavBar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Banner} />
          <Route path="/products" exact Component={Dashboard} />
          <Route path="/contact-us" exact Component={ProductRequest} />
          <Route path="/shop" exact Component={Shop} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
