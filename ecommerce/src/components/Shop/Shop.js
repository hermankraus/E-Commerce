import "../Shop/Shop.css";

import React, { useState, useContext } from "react";
import { CartContext } from "./CartContext";

const Shop = () => {
  const cartContext = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const cartItems = cartContext.cartItems;

  const handleRemoveFromCart = (productId) => {
    cartContext.removeFromCart(productId);
  };

  const productCounts = {};

  cartItems.forEach((item) => {
    if (productCounts[item.id]) {
      productCounts[item.id] += 1;
    } else {
      productCounts[item.id] = 1;
    }
  });

  const total = cartItems.reduce(
    (accumulator, item) => accumulator + parseFloat(item.PRICE),
    0
  );

  const handleBuy = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    cartContext.clearCart();
  };

  return (
    <div className="shop-container">
      <h2>Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <>
          <table className="product-table">
            <thead>
              <tr>
                <th>Marca</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(productCounts).map((productId) => {
                const product = cartItems.find((item) => item.id === productId);
                const quantity = productCounts[productId];

                return (
                  <tr key={productId}>
                    <td>{product.BRAND}</td>
                    <td>{product.PRODUCT}</td>
                    <td>{quantity}</td>
                    <td>${parseFloat(product.PRICE).toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-danger m-2"
                        onClick={() => handleRemoveFromCart(productId)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}

              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td>Total: ${parseFloat(total).toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
          <div className="checkout">
            <button className="btn btn-success m-2" onClick={handleBuy}>
              Finalizar compra
            </button>
          </div>
        </>
      )}
      {showModal && (
        <div className="custom-modal-overlay">
          <div className="custom-modal-content">
            <h3>Compra realizada con éxito</h3>
            <p>¡Gracias por tu compra!</p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
