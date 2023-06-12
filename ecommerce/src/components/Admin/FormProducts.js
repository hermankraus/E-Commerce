import { useState } from "react";
import { productsCollectionRef, updateProducts } from "../../FirebaseCall";
import { addDoc } from "firebase/firestore";
import ListofProducts from "./ListofProducts";

const FormProducts = ({ products, refreshList }) => {
  const [newPrBrand, setNewPrBrand] = useState("");
  const [newPrname, setNewPrname] = useState("");
  const [newPrPrice, setNewPrPrice] = useState(0);
  const [productId, setproductId] = useState("");
  const setNewProducts = async (e) => {
    e.preventDefault();
    try {
      if (productId === "" && newPrBrand !== "" && newPrname !=="" && newPrPrice !== 0) {
        
        await addDoc(productsCollectionRef, {
          BRAND: newPrBrand,
          PRICE: newPrPrice,
          PRODUCT: newPrname,
          STATE: true,
        });
      } else {
        if (newPrBrand !== "" && newPrname !=="" && newPrPrice !== 0) {
          updateProducts(productId, newPrBrand, newPrPrice, newPrname, true);
        }
      }

      setNewPrBrand("");
      setNewPrPrice("");
      setNewPrname("");
      setproductId("");
      refreshList();
    } catch (err) {
      console.error(err);
    }
  };
  const productEdited = (productData) => {
    const data = { ...productData };
    setNewPrBrand(data.BRAND);
    setNewPrPrice(data.PRICE);
    setNewPrname(data.PRODUCT);
    setproductId(data.id);
  };
  const clearInputHandler = () => {
    setNewPrBrand("");
    setNewPrPrice(0);
    setNewPrname("");
    setproductId("");
  };
  return (
    <>
      <form className="list-group " onSubmit={setNewProducts}>
        {productId === "" ? (
          <h2>Agregar Productos...</h2>
        ) : (
          <h2>Editar Producto...</h2>
        )}
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
        {productId === "" ? (
          <button className="btn btn-success m-2">Agregar</button>
        ) : (
          <button className="btn btn-primary m-2">Editar</button>
        )}
        {newPrBrand !=="" && <button onClick={clearInputHandler} className="btn btn-danger m-2">
          Cancelar
        </button>}
        
      </form>
      <ListofProducts products={products} productEdited={productEdited} />
    </>
  );
};

export default FormProducts;
