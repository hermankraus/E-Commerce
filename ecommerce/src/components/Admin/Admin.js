import React, { useState } from "react";
import { getProductList, productsCollectionRef } from "../../FirebaseCall";
import { addDoc } from "firebase/firestore";
const isAdmin = true;

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [newPrBrand, setNewPrBrand] = useState("");
  const [newPrname, setNewPrname] = useState("");
  const [newPrPrice, setNewPrPrice] = useState("");
  const [buttonProduct, setButtonProduct] = useState(false);
  const onClickProductHandler = () => {
    getProductList().then((filteredData) => {
      setProducts(filteredData);
    });
    setButtonProduct(true)
  };
  const setNewProducts = async () => {
    try {
      await addDoc(productsCollectionRef, {
        MARCA: newPrBrand,
        PRECIO: newPrPrice,
        PRODUCTO: newPrname,
        STATE: true,
      });
      setNewPrBrand("");
      setNewPrPrice("");
      setNewPrname("");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="container p-4">
      <nav className="list-group h-100">
        <button
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
          onClick={onClickProductHandler}
        >
          Productos
        </button>

        {isAdmin && (
          <a
            className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
            href="#!"
          >
            Usuarios
          </a>
        )}

        <a
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
          href="#!"
        >
          Pedidos
        </a>
      </nav>
      <div className="container p-4 ">
        {buttonProduct && (
          <div className="list-group ">
            <h2>Agregar Productos</h2>
            <input
              placeholder="agregar marca..."
              className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
              value={newPrBrand}
              onChange={(e) => {
                setNewPrBrand(e.target.value);
              }}
            />
            <input
              type="number"
              placeholder="agregar precio..."
              className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
              value={newPrPrice}
              onChange={(e) => {
                setNewPrPrice(Number(e.target.value));
              }}
            />
            <input
              placeholder="agregar nombre producto..."
              className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
              value={newPrname}
              onChange={(e) => {
                setNewPrname(e.target.value);
              }}
            />
            <button onClick={setNewProducts} className="btn btn-success m-2">
              Agregar
            </button>
          </div>
        )}
        {products.map((product) => (
          <div key={product.id} className="list-group ">
            <p className="list-group-item list-group-item-action d-flex flex-row justify-content-start d-flex">
              {product.MARCA}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
