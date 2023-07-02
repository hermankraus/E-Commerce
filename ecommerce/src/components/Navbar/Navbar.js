import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaMoon, FaSun } from "react-icons/fa";
import Header from "../Header/Header";
import LogIn from "../LogIn/LogIn";
import { AuthContext } from "../Contexts/AuthContext";
import { useContext } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

const Navbar = () => {
  const { userType } = useContext(AuthContext);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <Header />
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Productos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contactanos
              </Link>
            </li>
            {userType === "admin" ? (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            ) : userType === "employee" ? (
              <li className="nav-item">
                <Link className="nav-link" to="/employee">
                  Empleado
                </Link>
              </li>
            ) : null}

            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                <FaShoppingCart />
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <LogIn />
              </Link>
            </li>
            <li>
              <button
                className={`navbar-button ${
                  darkMode ? "dark-mode" : "light-mode"
                }`}
                onClick={toggleDarkMode}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
