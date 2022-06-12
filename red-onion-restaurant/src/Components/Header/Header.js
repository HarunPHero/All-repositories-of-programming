import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
  Form,
  Button,
  FormControl,
  CardGroup,
  Card,
} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../red-onion/images/logo2.png"
const Header = () => {
  return (
    <div>
      <header>
        <Navbar
          bg="secondary"
          class="navbar navbar-expand-lg navbar-light fixed-top"
          expand={false}
        >
          <Container fluid>
            <Navbar.Brand href="/">
            <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton className="bg-dark">
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  <img src={logo} alt="" />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/service">Services</Nav.Link>
                  <Nav.Link href="/blog">Blog</Nav.Link>
                  <Nav.Link href="/class">Class</Nav.Link>
                  <Nav.Link href="/#about">About us</Nav.Link>
                  <Nav.Link href="/price">Pricing</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
