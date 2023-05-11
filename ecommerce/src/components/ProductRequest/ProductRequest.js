import "./ProductRequest.css";
import React, {useState} from 'react';
// import emailjs from '@emailjs/browser';


const ProductRequest = () => {

  const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

  const [values, setValues] = useState({
      name: '',
      email: '',
      msg: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    msg: '',

  });

  
    const handleSubmit = (event) => {
      event.preventDefault();
    }

    const handleChange = (event) => {
    
      setValues({...values,[event.target.name] : event.target.value})
      console.log('values',values)
    }
    
    const emailValidator = () => {
      emailRegexp.test(values.email) === false ? setErrors((errors) => ({ ...errors, email: 'Email incorrecto' })) : setErrors((errors) => ({ ...errors, email: '' }));
    }

    const emptyValidator = () => {
      (values.name === '') ? setErrors((errors) => ({ ...errors, name: 'Nombre obligatorio' })) : setErrors((errors) => ({ ...errors, name: '' }));

      (values.msg === '') ? setErrors((errors) => ({ ...errors, msg: 'Mensaje obligatorio' })) : setErrors((errors) => ({ ...errors, msg: '' }));


    }
    
  return (

    <form className="field"  onSubmit={handleSubmit}>
      <label htmlFor="name"> Nombre </label>
      <input id="name" type="text" name="name" value={values.name} onChange={handleChange} onBlur={emptyValidator}/>
      
      <p>{errors.name}</p>


      <label htmlFor="email"> Email </label>
      <input  id="email" type="email" name="email" value={values.email} onChange={handleChange} onBlur={emailValidator} />

      <p>{errors.email}</p>
      
      <label htmlFor="message">Consulta</label>
      <textarea name="msg" onChange={handleChange} onBlur={emptyValidator} value={values.msg}/>

      <p>{errors.msg}</p>

      
      <input type="submit" value="Send" />
    </form>
  );
};

export default ProductRequest