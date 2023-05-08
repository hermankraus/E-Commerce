import React from "react";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "./components/Banner/Banner";
import Dashboard from "./components/Dashboard/Dashboard";
import LogIn from "./components/LogIn/LogIn";
import ProductRequest from "./components/ProductRequest/ProductRequest";
import Shop from "./components/Shop/Shop";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App" bg={"blue"}>
      <Header>
        <LogIn />
        <Shop />
      </Header>
      <Banner />
      <Dashboard />
      <ProductRequest />
    </div>
  );
}

export default App;
