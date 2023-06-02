import "./Card.css";
import React, { useEffect, useState, useContext } from "react";
import { db } from "../../config/Firebase";
import { getDocs, collection } from "firebase/firestore";
import { CartContext } from "../../App";

const Card = () => {
  const [productsList, setProductsList] = useState([]);
  const cartContext = useContext(CartContext);

  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProductList = async () => {
      try {
        const data = await getDocs(productsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        console.log(filteredData);
        setProductsList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getProductList();
  }, []);

  const handleAddToCart = (product) => {
    cartContext.addToCart(product);
  };

  return (
    <>
      {productsList.map((product, index) => (
        <div className="card-div" key={index}>
          <div>
            <p>{product.MARCA}</p>
            <p>{product.PRODUCTO}</p>
            <p>${product.PRECIO}</p>
          </div>
          <button onClick={() => handleAddToCart(product)}>
            Agregar al carrito
          </button>
        </div>
      ))}
    </>
  );
};

export default Card;

//{cartItems.map((items, index) => (
//<p>{items.toString()}</p>
//))}
