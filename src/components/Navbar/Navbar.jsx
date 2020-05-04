import React, { useState } from "react";
import { Link } from "gatsby";

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
        style={{ borderBottom: "4px solid black" }}
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <span className="icon is-medium brand">
              <i className="far fa-chart-bar" />
            </span>
            {/* <img src="https://bulma.io/images/placeholders/48x48.png" alt="" /> */}
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
            data-target="navbarBasicExample"
            tabIndex="0"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${burgerMenuActive}`}
        >
          <div className="navbar-end">
            <Link to="/about" className="navbar-item">
              <strong>About</strong>
            </Link>
            <Link to="/contact" className="navbar-item">
              <strong>Contact</strong>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
