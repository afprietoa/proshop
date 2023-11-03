import {Badge, Navbar, Nav, Container} from 'react-bootstrap';
import {FaShoppingCart,  FaUser} from 'react-icons/fa';
import Logo from '../assets/logo.png'
import { LinkContainer } from 'react-router-bootstrap';
import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {

  const { cartItems } = useSelector((state) => state.cart);


  return (
    <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>          
            <Navbar.Brand href='/'>
              <img src={Logo} alt="logo" />
            </Navbar.Brand>
          </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="ms-auto">
                  <LinkContainer to='/cart'>
                    <Nav.Link href='/cart'>
                      <FaShoppingCart /> Cart
                      
                  {cartItems.length > 0 && (
                    <Badge pill bg='success' style={{ marginLeft: '5px' }}>
                      {cartItems.reduce((a, c) => a + c.qty, 0)}
                    </Badge>
                  )}
                      </Nav.Link>
                  </LinkContainer>
                  
                    <Nav.Link href='/login'><FaUser /> Sig In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header