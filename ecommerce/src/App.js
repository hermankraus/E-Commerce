import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Dashboard from "./components/Dashboard/Dashboard";
import Banner from "./components/Banner/Banner";
import ProductRequest from "./components/ProductRequest/ProductRequest";
import NavBar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Admin from "./components/Admin/Admin";
import { CartProvider } from "./components/Shop/CartContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" exact Component={Banner} />
            <Route path="/products" exact Component={Dashboard} />
            <Route path="/admin" exact Component={Admin} />
            <Route path="/contact-us" exact Component={ProductRequest} />
            <Route path="/shop" exact Component={Shop} />
          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
