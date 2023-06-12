const ListofProducts = ({ products, productEdited }) => {
  
  const editButtonHandler = (product)=>{
    productEdited(product)
  }
  
    return (
    <>
      {products.map((product) => (
        <ul className="list-group " key={product.id}>
          <li className="list-group-item list-group-item-action d-flex flex-row justify-content-start d-flex">
            <ul className="list-group d-flex flex-row">
              <li className="list-group-item  m-1">{product.BRAND}</li>
              <li className="list-group-item m-1">{product.PRICE}</li>
              <li className="list-group-item m-1">{product.PRODUCT}</li>
              <button className="btn btn-primary m-1"onClick={()=>editButtonHandler(product)}>Editar</button>
              <button className="btn btn-danger m-1">Remover</button>
            </ul>
          </li>
        </ul>
      ))}
    </>
  );
};

export default ListofProducts;
