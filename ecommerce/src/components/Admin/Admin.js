import React, { useContext, useState } from "react";
import { getProductList } from "../../FirebaseCall";
import FormProducts from "./FormProducts";
import { AuthContext } from "../Contexts/AuthContext";
import "./Admin.css"
const Admin = () => {
  const [products, setProducts] = useState([]);
  const { userType } = useContext(AuthContext);
  const [buttonProduct, setButtonProduct] = useState(false);

  const onClickProductHandler = () => {
    getProductList().then((filteredData) => {
      setProducts(filteredData);
    });
    setButtonProduct(true);
  };

  return (
    <div className="container p-4">
      <nav className="list-group h-100">
        <li
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
          onClick={onClickProductHandler}
        >
          Productos
        </li>

        {userType === "admin" && (
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
          <FormProducts
            products={products}
            refreshList={onClickProductHandler}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
