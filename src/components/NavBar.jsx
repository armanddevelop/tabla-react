import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Generalstyles.css";

const NavBar = () => {
  const history = useHistory();
  const getNavLinks = (path) => {
    console.log(history.location.pathname);
    return path === history.location.pathname ? "danger" : "";
  };
  return (
    <Navbar bg="ligth" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Container>
            <Link variant={getNavLinks("/")} to="/">
              Lista de precios
            </Link>
          </Container>
          <Container className={getNavLinks("/inventory")}>
            <Link to="/inventory">Inventario</Link>
          </Container>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
