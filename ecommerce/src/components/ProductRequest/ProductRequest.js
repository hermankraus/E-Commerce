import "./ProductRequest.css";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ProductRequest = () => {
  const form = useRef();

  const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

  const [values, setValues] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [errors, setErrors] = useState({
    name: "Nombre obligatorio",
    email: "Email incorrecto",
    msg: "Mensaje obligatorio",
  });

  const formResultMessage = {
    ok: "Formulario enviado",
    notOk: "Formulario rechazado",
  };

  let formOK = false;

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log("values", values);
  };

  const emailValidator = () => {
    emailRegexp.test(values.email) === false || values.email === ""
      ? setErrors((errors) => ({ ...errors, email: "Email incorrecto" }))
      : setErrors((errors) => ({ ...errors, email: undefined }));
  };
  const nameValidator = () => {
    values.name === ""
      ? setErrors((errors) => ({ ...errors, name: "Nombre obligatorio" }))
      : setErrors((errors) => ({ ...errors, name: undefined }));
  };

  const msgValidator = () => {
    values.msg === ""
      ? setErrors((errors) => ({ ...errors, msg: "Mensaje obligatorio" }))
      : setErrors((errors) => ({ ...errors, msg: undefined }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    if (
      errors.email === undefined &&
      errors.msg === undefined &&
      errors.msg === undefined
    ) {
      formOK = true;
      console.log("ok", formOK);

      emailjs
        .sendForm(
          "service_jvg8a9r",
          "template_gwusf2z",
          form.current,
          "0iEDEZ13pK13800xG"
        )
        .then((result) => {
          if (result.status === Number(200)) {
            formOK = true;
          } else {
            formOK = false;
            alert("Error de servidor");
          }
        });
    } else {
      formOK = false;
      console.log("no ok ", formOK);
    }
  }

 /* const formMsg = (formOK) => {
    if (formOK === true) {
      return formResultMessage.ok;
    } else {
      return formResultMessage.notOk;
    }
  };
*/
  console.log("errores", errors);

  return (
    <form ref={form} className="field" onSubmit={handleSubmit}>
      <label htmlFor="name"> Nombre </label>
      <input
        id="name"
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={nameValidator}
      />

      <p class="text-danger">{errors.name}</p>

      <label htmlFor="email"> Email </label>
      <input
        id="email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={emailValidator}
      />

      <p class="text-danger">{errors.email}</p>

      <label htmlFor="message">Consulta</label>
      <textarea
        name="msg"
        onChange={handleChange}
        onBlur={msgValidator}
        value={values.msg}
      />

      <p class="text-danger">{errors.msg}</p>

      <input type="submit" value="Send" />

    </form>
  );
};

export default ProductRequest;
