import "./App.css";
import Banner from "./components/Banner/Banner";
import Dashboard from "./components/Dashboard/Dashboard";
import LogIn from "./components/LogIn/LogIn";
import ProductRequest from "./components/ProductRequest/ProductRequest";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="App">
      <h1> Bienvenidos a la tienda online de suplementos</h1>
      <LogIn />
      <Shop />
      <Banner />
      <Dashboard />
      <ProductRequest/>
      
    </div>
  );
}

export default App;
