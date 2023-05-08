import React from "react";
import "./Card.css";

const Card = () => {
const addToCartButtonHandler = ()=>{

}
const descriptionButtonHandler = ()=>{
  
}

  return (
    <div className="card-div">
      <p>Soy un suplemento</p>
      <button onClick={descriptionButtonHandler}>Descripcion</button>
      <button onClick={addToCartButtonHandler}>Añadir al carrito</button>
    </div>
  );
};

export default Card;
