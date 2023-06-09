import React, { useEffect, useState } from "react";
import { getProductList } from "../../FirebaseCall";

const isAdmin = true;

const Admin = () => {
    const [products, setProducts] = useState([])
    const onClickProductHandler =()=> {
        getProductList().then((filteredData)=>{
            setProducts(filteredData)
          })
    }
 
  return (
    <div className="container p-4">
      <nav className="list-group h-100">
        <li
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
         onClick={onClickProductHandler}>
          Productos
          
        </li>
        <>
        {products.map((product)=><div key={product.id}>
            <input value={product.MARCA}/>
        </div>)}
      </>
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
   
    </div>
  );
};

export default Admin;