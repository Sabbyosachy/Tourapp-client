import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
<Navbar fixed="top" bg="dark" expand="lg">
  <Container>
    <Navbar.Brand className="navbr"><i class="fas fa-route"></i><span className="text-warning">Take A Tour</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <NavLink className="navs1" to="/home">Home</NavLink>
        <NavLink className="navs" to="/service">Service</NavLink>
        <NavLink className="navs" to="/home">My Orders</NavLink>
        <NavLink className="navs" to="/join">Join</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;