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
    <div
      className={clsx(
        "d-flex flex-row",
        !isOpen && "d-none",
        isOpen && "active-submenu"
      )}
    >
      {subRoutes.map((subRoute) => (
        <Nav.Item key={subRoute.path}>
          <Link
            href={subRoute.path || "#"}
            className={clsx(
              "nav-link",
              "submenu",
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

function isRouteActive(route, pathName) {
  if (route.path && pathsMatch(pathName, route.path)) {
    return true;
  }

  if (route.subRoutes) {
    const isSubRouteActive = route.subRoutes.some((subRoute) => {
      const isActive = pathsMatch(pathName, subRoute.path);
      return isActive;
    });

    if (isSubRouteActive) {
      return true;
    }
  }

  return false;
}

// Function to render routes
function renderRoutes({
  routes,
  pathName,
  openSubmenu,
  handleOpenSubmenu,
  handleCloseSubmenu,
  isMobileView, // New prop for checking mobile view
}) {
  return routes.map((route) => (
    <div key={route.path || `{routes}`}>
      {route.path ? (
        <Nav.Item className="nav-item">
          <Link
            href={route.path}
            className={clsx(
              "nav-link",
              isRouteActive(route, pathName) && "nav-menu-active",
              "pointer-cursor" // Add the pointer-cursor class here
            )}
            onClick={() => {
              handleCloseSubmenu();
              // setOpenSubmenu(false);
            }}
          >
            {route.title}
          </Link>
        </Nav.Item>
      ) : (
        <div
          className={clsx(
            "nav-link",
            isRouteActive(route, pathName) && "nav-menu-active",
            "pointer-cursor"
          )}
        >
          <div
            onClick={(e) => handleOpenSubmenu(e, route.title, route.subRoutes)}
          >
            {route.title}
          </div>
          {route.subRoutes &&
            isMobileView && ( // Only show submenu for mobile
              <div className="submenu">
                <SubMenu
                  subRoutes={route.subRoutes}
                  pathName={pathName}
                  activeSubmenu={openSubmenu === route.title}
                  onSubmenuClick={(path) => handleOpenSubmenu(null, path)}
                />
              </div>
            )}
        </div>
      )}
    </div>
  ));
}

// Main AppNavbar component
export default function AppNavbar({ routes = [] }) {
  const pathName = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

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

  // Check for mobile view
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial view
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="">
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
        <Container className="">
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
                isMobileView, // Pass isMobileView prop
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Subnavbar */}
      <div className="submenu-border">
        <div className="text-uppercase font-title">
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
    </div>
  );
}
