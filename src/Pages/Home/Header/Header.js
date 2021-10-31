import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user,logOut}=useAuth();
 
    return (
        <div>
<Navbar fixed="top" bg="dark" expand="lg">
  <Container>
    <Navbar.Brand className="navbr"><i className="fas fa-route"></i><span className="text-warning">Take A Tour</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ms-auto">
        <NavLink className="navs1" to="/home">Home</NavLink>
        <HashLink className="navs" to="/home#services">Place Order</HashLink>

        {
          user?.email ?
          <NavLink className="navs" to="/myorders">My Orders</NavLink>:''
          }

        {
          user?.email ?
          <NavLink className="navs" to="/manageorders">Manage Orders</NavLink>:''
          }
        {
          user?.email ?
          <NavLink className="navs" to="/addnewservice">Add Service</NavLink>:''
          }
       
        {
          user?.email ?
          <NavLink onClick={logOut} to="/home" className="navs">Logout</NavLink>:
          
          <NavLink className="navs" to="/login">Login</NavLink>
          
          }
        <h6 className="mt-2"><span className="text-warning p-3">{user?.displayName}</span></h6>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;