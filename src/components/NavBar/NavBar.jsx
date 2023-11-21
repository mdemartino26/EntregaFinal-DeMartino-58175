import CartWidget from "../CartWidget/CartWidget";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import favicon from "./assets/favicon.ico";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Container>
        <Link to="/">
          <img src={favicon} alt="Coshop" />
        </Link>
        <Nav className="links">
         
            <NavLink to={"/category/discos"} className={({isActive}) => isActive? 'ActiveOption' : 'Option'}>Discos</NavLink>
            <NavLink to={'/category/singles'} className={({isActive}) => isActive? 'ActiveOption' : 'Option'}>Singles</NavLink>
            <NavLink to={'/category/merch'} className={({isActive}) => isActive? 'ActiveOption' : 'Option'}>Merch</NavLink>
          
        </Nav>
        <Nav>
          <CartWidget />
        </Nav>
      </Container>
    </nav>
  );
};

export default NavBar;
