import React, { useState } from "react";
import { Link } from "gatsby";
import { GithubOutlined } from "@ant-design/icons";
import Image from "../Image";

const Navbar = () => {
  const [burgerMenuActive, setBurgerMenuActive] = useState("");

  const toggleBurgerMenu = () => {
    return burgerMenuActive
      ? setBurgerMenuActive("")
      : setBurgerMenuActive("is-active");
  };

  return (
    <>
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <span className="icon is-medium brand">
              <img src="/logos/dawcomparison-logo-1024.png" alt="asdf" />
            </span>
            <span style={{ marginLeft: 10 }}>
              <strong>DAW Comparison</strong>{" "}
            </span>
          </Link>
          <div
            onClick={toggleBurgerMenu}
            onKeyUp={toggleBurgerMenu}
            role="button"
            className={`navbar-burger burger ${burgerMenuActive}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarResponsive"
            tabIndex="0"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>

        <div
          id="navbarResponsive"
          className={`navbar-menu ${burgerMenuActive}`}
        >
          <div className="navbar-end">
            <Link to="/what-is-daw" className="navbar-item">
              <strong>What is a DAW?</strong>
            </Link>

            <Link to="/about" className="navbar-item">
              <strong>About</strong>
            </Link>

            <Link to="/vst-comparison" className="navbar-item">
              <strong>VST Comparison</strong>
            </Link>

            <a
              href="https://github.com/mhatvan/dawcomparison"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar-item"
            >
              <GithubOutlined />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
