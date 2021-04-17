import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#">Mediana</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
