import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import NavbarSearch from "./navbar-search";

export default function AppNavbar({ routes = [] }) {
  return (
    <Navbar bg="dark" variant="dark" className="text-uppercase font-title" expand="md">
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex d-md-none text-light">
          GWAS Target{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="px-0 py-3 text-uppercase">
          <i className="bi bi-list me-1"></i>
          Menu
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="align-items-stretch">
          <Nav className="me-auto">
            {routes.map((route) => (
              <NavLink className="nav-link" key={route.path} to={route.path} end={route.end}>
                {route.title}
              </NavLink>
            ))}
          </Nav>
          <NavbarSearch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
