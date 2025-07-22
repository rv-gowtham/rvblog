import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import Logo from "../../assets/logo.png";

const CustomNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  // Manually toggle this for now (replace with context or prop later)
  const isLoggedIn = false; // Change this to true to simulate login

  return (
    <Navbar expand="md" className="bg-light sticky-top shadow-sm">
      <Container fluid>
        {/* Logo */}
        <Link to="/" className="navbar-brand ms-3" onClick={handleClose}>
          <img src={Logo} alt="Logo" width="60" height="60" />
        </Link>

        {/* Hamburger */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />

        {/* Offcanvas */}
        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={handleClose}
          placement="end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <img src={Logo} alt="Logo" width="50" />
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="ms-auto">
              <Link
                className="nav-link fw-semibold px-3"
                to="/"
                onClick={handleClose}
              >
                HOME
              </Link>
              <Link
                className="nav-link fw-semibold px-3"
                to="/about"
                onClick={handleClose}
              >
                ABOUT
              </Link>
              <Link
                className="nav-link fw-semibold px-3"
                to="/recipes"
                onClick={handleClose}
              >
                RECIPES
              </Link>
              <Link
                className="nav-link fw-semibold px-3"
                to="/add"
                onClick={handleClose}
              >
                ADD
              </Link>

              {!isLoggedIn ? (
                <>
                  <Link
                    className="nav-link fw-semibold px-3"
                    to="/login"
                    onClick={handleClose}
                  >
                    LOGIN
                  </Link>
                </>
              ) : (
                <span
                  className="nav-link text-danger fw-semibold px-3"
                  role="button"
                  onClick={() => alert("Logout logic here")}
                >
                  LOGOUT
                </span>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
