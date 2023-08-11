import {Navbar, Nav, Container} from 'react-bootstrap';
import {FaShoppingCart,  FaUser} from 'react-icons/fa';

const Header = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='md' collapseOnSelect>
        <Container>
            <Navbar.Brand href='/'>ProShop</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className="ms-auto">
                    <Nav.Link href='/cart'><FaShoppingCart /> Cart</Nav.Link>
                    <Nav.Link href='/login'><FaUser /> Sig In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default Header