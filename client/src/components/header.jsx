"use client";
import AppNavbar from "./navbar/navbar";
import { useState } from "react";

export default function Header({ routes = [] }) {
  const [search, setSearch] = useState("");

  function handleKey(e) {
    if (e.key === "Enter") {
      // window.open(
      //   "https://www.google.com/search?q=site:https://hpvvisuals.cancer.gov " +
      //     search,
      //   "_blank"
      // );
      window.open(
        "https://www.google.com/search?q=site:https://analysistools.cancer.gov " +
          search,
        "_blank"
      );
    }
  }
  function handleClick(e) {
    window.open(
      "https://www.google.com/search?q=site:https://analysistools.cancer.gov " +
        search,
      "_blank"
    );
  }

  return (
    <header>
      <div
        className="container my-2 mb-1 row"
        style={{
          marginLeft: "auto !important",
          marginRight: "auto !important",
        }}
      >
        <a
          className="col-xl-9 col-md-8 col-sm-12 mb-1"
          rel="noopener noreferrer"
          href="/#"
        >
          <img
            src="/assets/HPVLogo_Desktop.svg"
            alt="Human Papillomavrus Automated Visual Evaluation Tool Logo"
            className="mw-100 hpv-logo"
          />
        </a>
        <div className="col-xl-3 col-md-4 col-sm-9 col-sx-9 mb-1">
          <div className="d-flex" style={{ width: "auto !important" }}>
            <label htmlFor="doc_search" className="visually-hidden">
              Search:
            </label>
            <input
              id="doc_search"
              onKeyDown={(e) => handleKey(e)}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
              type="text"
              className="form-control"
              placeholder="Document Site Search"
              style={{
                borderTopLeftRadius: "20px",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "0",
                borderTopRightRadius: "0",
              }}
            />

            <div
              className="input-group-text"
              onClick={() => handleClick()}
              style={{
                borderTopRightRadius: "20px",
                borderBottomRightRadius: "20px",
                borderBottomLeftRadius: "0",
                borderTopLeftRadius: "0",
                marginLeft: "-1px",
                cursor: "pointer",
              }}
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="1em"
                height="1em"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg> */}
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block bg-primary text-white py-1">
        <div className="container">
          <h1 className="h6 fw-semibold">
            Human Papillomavirus Automated Visual Evaluation (PAVE) Tool
          </h1>
        </div>
      </div>
      <AppNavbar routes={routes} />
    </header>
  );
}
