import "./ProductRequest.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ProductRequest = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jvg8a9r', 'template_gwusf2z', form.current, 'YDO4PPWOkYjVV8mfT')
      .then((result) => {
          console.log(result.text);
          alert("sent")
      }, (error) => {
          console.log(error.text);
          alert("error")
      });
  };

  return (
    <form className="field" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ProductRequest