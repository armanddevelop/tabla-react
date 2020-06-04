import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import "../styles/Generalstyles.css";

const NavBar = () => {
  const history = useHistory();
  const getNavLinks = (path) => {
    return path === history.location.pathname ? "active" : "";
  };
  return (
    <Navbar bg="ligth" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ul className="nav-paginator">
          <li>
            <Link className={getNavLinks("/")} to="/">
              Lista de precios
            </Link>
          </li>
          <li>
            <Link className={getNavLinks("/inventory")} to="/inventory">
              Inventario
            </Link>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
