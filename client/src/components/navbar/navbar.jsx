"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import clsx from "clsx";
import NavbarSearch from "./navbar-search";

function pathsMatch(path1, path2) {
  // remove trailing slash
  path1 = path1.replace(/\/$/, "");
  path2 = path2.replace(/\/$/, "");
  return path1 === path2;
}

export default function AppNavbar({ routes = [] }) {
  const pathName = usePathname();
  return (
    <Navbar variant="dark" className="text-uppercase font-title" expand="md" style={{background: "linear-gradient(270deg, #20094b 0%, #bf00a4 50%) !important"}}>
      <Container className="py-2">
        <Navbar.Brand as={Link} href="/" className="d-flex d-md-none text-light">
          HPV Visuals{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" className="px-0 py-3 text-uppercase">
          <i className="bi bi-list me-1"></i>
          Menu
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="align-items-stretch">
          <Nav className="me-auto">
            {routes.map((route) => (
              <Link className={clsx("nav-link", pathsMatch(pathName, route.path) && "active")} key={route.path} href={route.path}>
                {route.title}
              </Link>
            ))}
          </Nav>
          <NavbarSearch />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
