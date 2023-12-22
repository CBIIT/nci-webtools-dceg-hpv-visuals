"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import clsx from "clsx";

function pathsMatch(path1, path2) {
  // remove trailing slash
  path1 = path1.replace(/\/$/, "");
  path2 = path2.replace(/\/$/, "");
  return path1 === path2;
}

function renderSubMenu(subRoutes, pathName) {
  return (
    <NavDropdown.Menu>
      {subRoutes.map((subRoute) => (
        <NavDropdown.Item
          key={subRoute.path}
          className={clsx(pathName === subRoute.path && "active", "nav-link")}
        >
          <Link href={subRoute.path} passHref>
            {subRoute.title}
          </Link>
        </NavDropdown.Item>
      ))}
    </NavDropdown.Menu>
  );
}

function renderMenuRoutes(menuRoutes, pathName) {
  return (
    <NavDropdown.Menu>
      {menuRoutes.map((subRoute) => (
        <NavDropdown.Item
          key={subRoute.path}
          className={clsx(pathName === subRoute.path && "active", "nav-link")}
        >
          <Link href={subRoute.path} passHref>
            {subRoute.title}
          </Link>
        </NavDropdown.Item>
      ))}
    </NavDropdown.Menu>
  );
}

function renderRoutes({ routes, pathName }) {
  return routes.map((route) => {
    if (route.subRoutes) {
      return (
        <NavDropdown
          title={route.title}
          id={`nav-dropdown-${route.path}`}
          key={route.path}
          aria-labelledby={`nav-dropdown-label-${route.path}`} // Add a label ID
        >
          <NavDropdown.Item className="nav-link">
            <Link href={route.path} passHref>
              {route.title}{" "}
            </Link>
          </NavDropdown.Item>
          <div>
            {route.subRoutes.map((subRoute) => (
              <NavDropdown.Item
                key={subRoute.path}
                className={clsx(
                  pathName === subRoute.path && "active",
                  "nav-link"
                )}
              >
                <Link href={subRoute.path} passHref>
                  <span className="me-1"></span>
                  {subRoute.title}
                </Link>
              </NavDropdown.Item>
            ))}
          </div>

          {route.subRoutes.some((subRoute) => subRoute.subRoutes) &&
            renderSubMenu(route.subRoutes, pathName)}
        </NavDropdown>
      );
    } else if (route.menuRoutes) {
      return (
        <NavDropdown
          title={route.title}
          id={`nav-dropdown-${route.path}`}
          key={route.path}
          aria-labelledby={`nav-dropdown-label-${route.path}`} // Add a label ID
        >
          <span
            id={`nav-dropdown-label-${route.path}`}
            className="visually-hidden"
          >
            {route.title} Dropdown
          </span>
          <div>
            {route.menuRoutes.map((subRoute) => (
              <NavDropdown.Item
                key={subRoute.path}
                className={clsx(
                  pathName === subRoute.path && "active",
                  "nav-link"
                )}
              >
                <Link href={subRoute.path} passHref>
                  {subRoute.title}
                </Link>
              </NavDropdown.Item>
            ))}
          </div>

          {route.menuRoutes.some((subRoute) => subRoute.subRoutes) &&
            renderSubMenu(route.subRoutes, pathName)}
        </NavDropdown>
      );
    } else {
      return (
        <Link
          className={clsx(
            "nav-link",
            pathsMatch(pathName, route.path) && "active"
          )}
          key={route.path}
          href={route.path}
        >
          {route.title}
        </Link>
      );
    }
  });
}

export default function AppNavbar({ routes = [] }) {
  const pathName = usePathname();
  return (
    <Navbar
      variant="dark"
      className="text-uppercase font-title"
      expand="md"
      style={{
        background:
          "linear-gradient(270deg, #20094b 0%, #bf00a4 50%) !important",
      }}
    >
      <Container className="py-2">
        <Navbar.Brand
          as={Link}
          href="/"
          className="d-flex d-md-none text-light"
        >
          HPV Visuals{" "}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="px-0 py-3 text-uppercase"
        >
          <i className="bi bi-list me-1"></i>
          Menu
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="align-items-stretch">
          <Nav className="me-auto">
            {/* {routes.map((route) => (
              <Link
                className={clsx(
                  "nav-link",
                  pathsMatch(pathName, route.path) && "active"
                )}
                key={route.path}
                href={route.path}
              >
                {route.title}
              </Link>
            ))} */}
            {renderRoutes({ routes, pathName })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
