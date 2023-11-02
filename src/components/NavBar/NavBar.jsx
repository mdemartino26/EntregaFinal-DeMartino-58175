import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import favicon from '../../../public/favicon.ico';


const NavBar = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Nav>
        <img src={favicon} alt="Coshop" />
        </Nav>
        <Nav>
          <div>
            <Button  variant="outline-danger">Discos</Button>
            <Button  variant="outline-danger">Singles</Button>
            <Button  variant="outline-danger">Merch</Button>
          </div>
        </Nav>
        <Nav>
          <CartWidget />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
