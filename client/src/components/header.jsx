"use client";
import AppNavbar from "./navbar/navbar";

export default function Header({ routes = [] }) {
  return (
    <header>
      <div className="container my-2 my-md-4 mb-1">
        <a className="d-inline-block" rel="noopener noreferrer" href="https://www.cancer.gov/">
          <img src="/assets/nci-dceg-logo.svg" height="60" alt="National Cancer Institute Logo" className="mw-100" />
        </a>
      </div>
      <div className="d-none d-md-block bg-primary text-white py-2">
        <div className="container">
          <h1 className="h6 fw-semibold">HPV Visuals</h1>
        </div>
      </div>
      <AppNavbar routes={routes} />
    </header>
  );
}
