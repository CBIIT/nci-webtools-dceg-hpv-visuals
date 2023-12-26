"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import clsx from "clsx";
import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function pathsMatch(path1, path2) {
  // Check if path1 or path2 is undefined
  if (!path1 || !path2) {
    return false;
  }

  // remove trailing slash
  path1 = path1.replace(/\/$/, "");
  path2 = path2.replace(/\/$/, "");

  return path1 === path2;
}

function SubMenu({ subRoutes, pathName, isOpen }) {
  return (
    <div className={clsx("d-flex flex-row", !isOpen && "d-none")}>
      {subRoutes.map((subRoute) => (
        <Nav.Item key={subRoute.path}>
          <Link
            href={subRoute.path || "#"}
            className={clsx(
              "nav-link",
              pathsMatch(pathName, subRoute.path) && "active"
            )}
          >
            {subRoute.title}
          </Link>
        </Nav.Item>
      ))}
    </div>
  );
}

// Function to render routes
function renderRoutes({
  routes,
  pathName,
  openSubmenu,
  handleOpenSubmenu,
  handleCloseSubmenu,
}) {
  return routes.map((route) => (
    <div key={route.path || "no-path"}>
      {route.path ? (
        <Nav.Item className="nav-item">
          <Link
            href={route.path}
            className={clsx(
              "nav-link",
              pathsMatch(pathName, route.path) && "active"
            )}
            onClick={() => {
              handleCloseSubmenu();
              //setOpenSubmenu(false);
            }}
          >
            {route.title}
          </Link>
        </Nav.Item>
      ) : (
        <div
          className="nav-link"
          onClick={(e) => handleOpenSubmenu(e, route.title, route.subRoutes)}
        >
          {route.title}
        </div>
      )}
    </div>
  ));
}

// Main AppNavbar component
export default function AppNavbar({ routes = [] }) {
  const pathName = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleOpenSubmenu = (event, title, subRoutes) => {
    event.preventDefault();
    setOpenSubmenu((prevOpenSubmenu) => {
      if (prevOpenSubmenu === title || !subRoutes) {
        return null;
      } else {
        return title;
      }
    });
  };

  const handleCloseSubmenu = () => {
    setOpenSubmenu(null);
  };

  return (
    <div>
      {/* Main Navbar */}
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
          {/* Navbar Brand and Toggle */}
          <Navbar.Brand href="/" className="d-flex d-md-none text-light">
            HPV Visuals
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbar-nav"
            className="px-0 py-3 text-uppercase"
          >
            <i className="bi bi-list me-1"></i>
            Menu
          </Navbar.Toggle>
          {/* Navbar Content */}
          <Navbar.Collapse id="navbar-nav" className="align-items-stretch">
            <Nav className="me-auto">
              {/* Render routes */}
              {renderRoutes({
                routes,
                pathName,
                openSubmenu,
                handleOpenSubmenu,
                handleCloseSubmenu,
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Subnavbar */}
      <div
        className="text-uppercase font-title"
        style={{
          background: "#333", // Customize the background color for the subnavbar
          paddingLeft: "16px", // Adjust padding as needed
        }}
      >
        <Container className="">
          <Nav className="me-auto">
            {/* Render submenus */}
            {routes.map((route) => (
              <div key={route.title}>
                {route.subRoutes && (
                  <div className="submenu">
                    <SubMenu
                      subRoutes={route.subRoutes}
                      pathName={pathName}
                      isOpen={openSubmenu === route.title}
                    />
                  </div>
                )}
              </div>
            ))}
          </Nav>
        </Container>
      </div>
    </div>
  );
}
