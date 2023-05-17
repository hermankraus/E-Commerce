import "./Navbar.css";
import { Link } from "react-router-dom";

import Header from "../Header/Header";
import Shop from "../Shop/Shop";
import LogIn from "../LogIn/LogIn";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <Header />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
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
              <div className="navbar-singin-shop">
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    <Shop />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/account">
                    <LogIn />
                  </Link>
                </li>
              </div>
              {/* 
              
              Ejemplo para el filtering de productos
              
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown link
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
