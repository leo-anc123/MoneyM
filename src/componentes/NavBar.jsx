import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/Navbar.css"
import { Link } from 'react-router-dom';


function NavBarMenu() {
  return (
    <>
    
      <Navbar bg="light" data-bs-theme="light" >
        <Container >
          <Navbar.Brand as={Link} to="/">
            <img src="./imagenes/logo.jpg" alt="Logo" className='logo' />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link  as={Link} to='/Gastos-personales' className='navigation'>Gastos personales</Nav.Link>
            <Nav.Link  as={Link} to='/Gastos-esenciales' className='navigation'>Gastos esenciales</Nav.Link>
            <Nav.Link  as={Link} to='/cuentas y obligaciones' className='navigation'>Cuentas y obligaciones</Nav.Link>
            <Nav.Link  as={Link} to='/Inversiones' className='navigation'>Inversiones</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarMenu;