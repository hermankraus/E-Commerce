import { useState } from "react";
import { updateProducts } from "../../FirebaseCall";

const ListofProducts = ({ products, productEdited }) => {
  const [listState, setListState] = useState(true);

  const editButtonHandler = (product) => {
    productEdited(product);
  };
  const removeButtonHandler = (id, brand, price, product, state) => {
    updateProducts(id, brand, price, product, state);
  };

  const productsFiltered = products.filter((product) => {
    return product.STATE === true;
  });
  const productsDeleted = products.filter((product) => {
    return product.STATE === false;
  });
  const setlistHandler = () => {
    setListState(!listState);
  };
  return (
    <>
      {listState ? (
        <>
          {productsFiltered.map((product) => (
            <ul className="list-group " key={product.id}>
              <li className="list-group-item list-group-item-action d-flex flex-row justify-content-start d-flex">
                <ul className="list-group d-flex flex-row">
                  <li className="list-group-item  m-1">{product.BRAND}</li>
                  <li className="list-group-item m-1">{product.PRICE}</li>
                  <li className="list-group-item m-1">{product.PRODUCT}</li>
                  <button
                    className="btn btn-primary m-1"
                    onClick={() => editButtonHandler(product)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger m-1"
                    onClick={() =>
                      removeButtonHandler(
                        product.id,
                        product.BRAND,
                        product.PRICE,
                        product.PRODUCT,
                        false
                      )
                    }
                  >
                    Remover
                  </button>
                </ul>
              </li>
            </ul>
          ))}
        </>
      ) : (
        <>
          {productsDeleted.map((product) => (
            <ul className="list-group " key={product.id}>
              <li className="list-group-item list-group-item-action d-flex flex-row justify-content-start d-flex">
                <ul className="list-group d-flex flex-row">
                  <li className="list-group-item  m-1">{product.BRAND}</li>
                  <li className="list-group-item m-1">{product.PRICE}</li>
                  <li className="list-group-item m-1">{product.PRODUCT}</li>

                  <button
                    className="btn btn-success m-1"
                    onClick={() =>
                      removeButtonHandler(
                        product.id,
                        product.BRAND,
                        product.PRICE,
                        product.PRODUCT,
                        true
                      )
                    }
                  >
                    Agregar
                  </button>
                </ul>
              </li>
            </ul>
          ))}
        </>
      )}

      <button value={listState} onClick={setlistHandler} className="btn btn-light">
        {listState ? "Productos eliminados" : "productos a la vista"}
      </button>
    </>
  );
};

export default ListofProducts;
