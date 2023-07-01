import React, { useContext, useState } from "react";
import { getProductList, getUsersList } from "../../FirebaseCall";
import FormProducts from "./FormProducts";
import EmployeeForm from "./EmployeeList/EmployeeForm"
import { AuthContext } from "../Contexts/AuthContext";
import "./Admin.css"

const Admin = () => {
  const [products, setProducts] = useState([]);
  const { userType } = useContext(AuthContext);
  const [buttonProduct, setButtonProduct] = useState(false);
  const [buttonUsers, setButtonUsers] = useState(false);
  const [users, setUsers] = useState([])

  const onClickProductHandler = () => {
    getProductList().then((filteredData) => {
      setProducts(filteredData);
    });
    setButtonProduct(true);
    setButtonUsers(false)
  };
  const onClickUsersHandler = () =>{
    getUsersList().then((filteredData)=>{
      setUsers(filteredData)
    })
    setButtonProduct(false)
    setButtonUsers(true)
  }

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
          <li
            className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
            onClick={onClickUsersHandler}
          >
            Usuarios
          </li>
        )}

        <li
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
          href="#!"
        >
          Pedidos
        </li>
      </nav>
      <div className="container p-4 ">
        {buttonProduct ? (
          <FormProducts
            products={products}
            refreshList={onClickProductHandler}
          />
        ):buttonUsers && <EmployeeForm users = {users} refreshList={onClickUsersHandler} />}
      </div>
    </div>
  );
};

export default Admin;
