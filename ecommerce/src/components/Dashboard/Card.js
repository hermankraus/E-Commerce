import "./Card.css";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../App";
import { getProductList} from "../../FirebaseCall";
const Card = () => {
  const [productsList, setProductsList] = useState([]);
  const cartContext = useContext(CartContext);

  useEffect(()=>{
    getProductList().then((filteredData)=>{
      setProductsList(filteredData)
    })
  
  
    
  },[])

  const handleAddToCart = (product) => {
    cartContext.addToCart(product);
  };

  return (
    <>
      {productsList.map((product) => (
        <div key={product.id}>
          {product.STATE && (
            <div className="card-div" >
              <div>
                <p>{product.MARCA}</p>
                <p>{product.PRODUCTO}</p>
                <p>${product.PRECIO}</p>
              </div>
              <button onClick={() => handleAddToCart(product)}>
                Agregar al carrito
              </button>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default Card;

//{cartItems.map((items, index) => (
//<p>{items.toString()}</p>
//))}
