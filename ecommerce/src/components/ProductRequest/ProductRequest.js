import "./ProductRequest.css";

const ProductRequest = () => {
  return (
    <div className="form-container">
                <label for="name">Nombre:</label>
                <input id="name" name="name" type="text" required></input>
                <label for="email">Email:</label>
                <input id="email" name="email" type="email" required></input>
                <label for="metextarea">Mensaje:</label>
                <textarea name="metextarea" id="metextarea" cols="30" rows="10" required></textarea> 
            <p>
                <button  onclick="limpiarFormulario()" value="Limpiar">Limpiar</button>
                <input type="submit" id="button"  value="Enviar"  ></input>
            </p>
            
    </div>
  )
  }

export default ProductRequest
