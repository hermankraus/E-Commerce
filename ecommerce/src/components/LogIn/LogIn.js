import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./LogIn.css";

function LogIn() {
  const USER_DATA = [
    {
      user: "admin@admin.com",
      password: "admin",
    },
    { user: "userRandom@user.com", password: "userRandom" },
  ];
  const [show, setShow] = useState(false);
  const [inputMail, setInputMail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const emailInputHandler = (ev) => {
    setInputMail(ev.target.value);
  };
  const passwordInputHandler = (ev) => {
    setInputPassword(ev.target.value);
  };
  const buttonSignHandler = () => {
    if (
      inputMail !== USER_DATA[0].user ||
      inputPassword !== USER_DATA[0].password
    ) {
      alert("No estas registrado ADMINISTRADOR");
    } else {
      alert("podrias ingresar ADMIN");
    }
  };

  return (
    <>
      <Button variant="Light" onClick={handleShow}>
        Sing In
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ingresar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="modal-form">
            <label>Email</label>
            <input
              placeholder="Usuario"
              value={inputMail}
              onChange={emailInputHandler}
            />
            <label>Contraseña</label>
            <input
              placeholder="Contraseña"
              value={inputPassword}
              type="password"
              onChange={passwordInputHandler}
            />
            <Button variant="success" onClick={buttonSignHandler}>
              Ingresar
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}

export default LogIn;
