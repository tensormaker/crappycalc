import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import identityLogo from "../../assets/identity.png";
import { useAuth } from "../../use-auth-client";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from "react-bootstrap";
import Image from 'react-bootstrap/Image';

export default function Navbars() {
  const { isAuthenticated, identity, login } = useAuth();
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="#home">
            <Image src={logo} rounded width={65} height={56} className="logo" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="right nav">
              {
                isAuthenticated 
                  ?
                  <NavLink to={""}>
                    Desconectar
                  </NavLink>
                  :
                  <NavLink to={""} onClick={login}>
                    Continuar con <Image src={identityLogo} width={80} height={20} className="ii"></Image>
                  </NavLink>
              }
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}