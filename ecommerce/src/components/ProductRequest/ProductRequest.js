import "./ProductRequest.css";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


const ProductRequest = () => {

  const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


  const form = useRef();
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const emailValidator = (event) => {
  return setEmail(event.target.value); 
}
  
  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_jvg8a9r', 'template_gwusf2z', form.current, 'YDO4PPWOkYjVV8mfT')
    .then((result) => {
   
    if (regex.test(email) == false){ 
    setError('correo invalido');
    }

    else{    
    setError('correo valido');
    console.log(result.text);
      /*alert("sent")*/
    return true;
    } 
    }, (error) => {
        console.log(error.text);
          /*alert("error")*/
      });
  };

  return (
    <form className="field" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" value={email} onChange={emailValidator}/>
      <p> {error} </p>
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ProductRequest