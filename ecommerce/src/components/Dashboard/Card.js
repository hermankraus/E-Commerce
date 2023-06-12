import "./Card.css";
import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../../App";
import { getProductList } from "../../FirebaseCall";
import { FaShoppingCart } from "react-icons/fa";
const Card = () => {
  const [productsList, setProductsList] = useState([]);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    getProductList().then((filteredData) => {
      setProductsList(filteredData);
    });
  }, []);

  const handleAddToCart = (product) => {
    cartContext.addToCart(product);
  };

  return (
    <div className="containerCard">
      {productsList.map((product) => (
        <div key={product.id}>
          {product.STATE && (
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">{product.BRAND}</h4>
                <h5 className="card-subtitle mb-2 text-muted">
                  {product.PRODUCT}
                </h5>
                <p className="card-price">${product.PRICE}</p>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="btn btn-primary"
              >
                <FaShoppingCart /> Agregar al carrito
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
