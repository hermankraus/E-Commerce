import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";

import { Navigate } from "react-router-dom";

import "./LogIn.css";

function LogIn() {
  const USER_DATA = [
    {
      user: "admin@admin.com",
      password: "admin",
    },
    { user: "empleado@user.com", password: "empleado" },
    { user: "userRandom@user.com", password: "userRandom" },
  ];
  const [show, setShow] = useState(false);
  const [inputMail, setInputMail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  //const [redirectToAdmin, setRedirectToAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const handleClose = () => {
    setShow(false);
    setErrorMessage("");
    setInputMail("");
    setInputPassword("");
  };

  const handleShow = () => {
    setShow(true);
    setErrorMessage("");
    setInputMail("");
    setInputPassword("");
  };

  const emailInputHandler = (e) => {
    setInputMail(e.target.value);
    setErrorMessage("");
  };

  const passwordInputHandler = (e) => {
    setInputPassword(e.target.value);
  };

  const buttonSignHandler = (e) => {
    e.preventDefault();

    const user = USER_DATA.find(
      (data) => data.user === inputMail && data.password === inputPassword
    );

    if (!user) {
      setErrorMessage("Credenciales incorrectas");
      setInputMail("");
      setInputPassword("");
    } else {
      if (user.user === "admin@admin.com" && user.password === "admin") {
        // setRedirectToAdmin(true);
        setIsLoggedIn(true);
        setShow(false);
      } else {
        setErrorMessage("");
        alert("Ingreso exitoso");
        setIsLoggedIn(true);
        setShow(false);
      }
    }
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogoutConfirmation = (confirmed) => {
    setShowLogoutConfirmation(false);
    if (confirmed) {
      setIsLoggedIn(false);
    }
  };

  /*if (redirectToAdmin) {
    return <Navigate to="/admin" />;
  }*/
  return (
    <>
      <p className="sign-in" variant="Light">
        {isLoggedIn ? (
          <FaSignOutAlt onClick={handleLogout} />
        ) : (
          <BsFillPeopleFill onClick={handleShow} />
        )}
      </p>

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
            {errorMessage && <p className="error-message">{errorMessage}</p>}

            <Button type="submit" variant="success" onClick={buttonSignHandler}>
              Ingresar
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <Modal
        show={showLogoutConfirmation}
        onHide={() => handleLogoutConfirmation(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirmar cierre de sesión</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Estás seguro de que deseas cerrar sesión?</Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => handleLogoutConfirmation(false)}
          >
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => handleLogoutConfirmation(true)}
          >
            Cerrar sesión
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogIn;
