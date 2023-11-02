import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from 'react-bootstrap/Button';
import './NavBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';


const NavBar = () => {
  return (
    <Navbar className="navbar">
      <Container>
        <Nav>
          <h3>CoShop</h3>
        </Nav>
        <Nav>
          <div>
            <Button  variant="outline-primary">Celulares</Button>
            <Button  variant="outline-primary">Tablet</Button>
            <Button  variant="outline-primary">Notebooks</Button>
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
