import React, { useState, useEffect, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { getUsersList } from "../../FirebaseCall";
import { AuthContext } from "../Contexts/AuthContext";
import "./LogIn.css";
import { CartContext } from "../Shop/CartContext";

function LogIn() {
  const { setUserType } = useContext(AuthContext);
  const { clearCart } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [inputMail, setInputMail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState(null);
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

    const adminAccount = userData.find(
      (data) =>
        data.email === inputMail &&
        data.contraseña === inputPassword &&
        data.userCat === "admin"
    );

    const employeeAccount = userData.find(
      (data) =>
        data.email === inputMail &&
        data.contraseña === inputPassword &&
        data.userCat === "employee"
    );

    const clientAccount = userData.find(
      (data) =>
        data.email === inputMail &&
        data.contraseña === inputPassword &&
        data.userCat === "client"
    );

    if (adminAccount) {
      setIsLoggedIn(true);
      setShow(false);
      setErrorMessage("");
      setUserType("admin");
    } else if (employeeAccount) {
      setIsLoggedIn(true);
      setShow(false);
      setErrorMessage("");
      setUserType("employee");
    } else if (clientAccount) {
      setIsLoggedIn(true);
      setShow(false);
      setUserType("client");

      setErrorMessage("");
    } else {
      setErrorMessage("Credenciales incorrectas");
      setInputMail("");
      setInputPassword("");
      setUserType("false");
    }
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const handleLogoutConfirmation = (confirmed) => {
    setShowLogoutConfirmation(false);
    if (confirmed) {
      setIsLoggedIn(false);
      setUserType("false");
      clearCart();
    }
  };

  useEffect(() => {
    getUsersList().then((filteredUserData) => {
      setUserData(filteredUserData);
    });
  }, []);

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
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Usuario"
              value={inputMail}
              onChange={emailInputHandler}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              placeholder="Contraseña"
              value={inputPassword}
              type="password"
              onChange={passwordInputHandler}
              name="password"
              autoComplete="on"
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
