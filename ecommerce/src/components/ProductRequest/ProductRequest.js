import "./ProductRequest.css";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ProductRequest = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

  const [values, setValues] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    msg: "",
  });

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const emailValidator = () => {
    if (!emailRegexp.test(values.email) || values.email === "") {
      setErrors((errors) => ({ ...errors, email: "Email incorrecto" }));
    } else {
      setErrors((errors) => ({ ...errors, email: undefined }));
    }
  };

  const nameValidator = () => {
    if (values.name === "") {
      setErrors((errors) => ({ ...errors, name: "Nombre obligatorio" }));
    } else {
      setErrors((errors) => ({ ...errors, name: undefined }));
    }
  };

  const msgValidator = () => {
    if (values.msg === "") {
      setErrors((errors) => ({ ...errors, msg: "Mensaje obligatorio" }));
    } else {
      setErrors((errors) => ({ ...errors, msg: undefined }));
    }
  };

  const resetForm = () => {
    setValues({
      name: "",
      email: "",
      msg: "",
    });
    setErrors({
      name: "",
      email: "",
      msg: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      errors.email === undefined &&
      errors.name === undefined &&
      errors.msg === undefined &&
      values !== ""
    ) {
      emailjs
        .sendForm(
          "service_jvg8a9r",
          "template_gwusf2z",
          form.current,
          "0iEDEZ13pK13800xG"
        )
        .then((response) => {
          setFormSubmitted(true);
          setTimeout(() => {
            setFormSubmitted(false);
          }, 1000);
        })
        .catch((error) => {
          // console.error("Error al enviar el formulario:", error);

          setErrorMessage("Error de servidor al enviar el formulario");
          setTimeout(() => {
            setErrorMessage("");
          }, 1000);
        });
    } else {
      setErrorMessage("Por favor completar todos los campos");
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
    }
    resetForm();
  };

  return (
    <>
      <form ref={form} className="field" onSubmit={handleSubmit}>
        <h4>
          En este formulario vas a poder contactarnos para resolver tus
          consultas
        </h4>
        <label htmlFor="name"> Nombre </label>
        <input
          id="name"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={nameValidator}
        />
        <p className="text-danger">{errors.name}</p>

        <label htmlFor="email"> Email </label>
        <input
          id="email"
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={emailValidator}
        />
        <p className="text-danger">{errors.email}</p>

        <label htmlFor="message">Consulta</label>
        <textarea
          name="msg"
          onChange={handleChange}
          onBlur={msgValidator}
          value={values.msg}
        />
        <p className="text-danger">{errors.msg}</p>

        {formSubmitted ? (
          <p className="success-message">Formulario enviado</p>
        ) : (
          <p className="error-message">{errorMessage}</p>
        )}

        <input type="submit" value="Send" />
      </form>
    </>
  );
};

export default ProductRequest;
