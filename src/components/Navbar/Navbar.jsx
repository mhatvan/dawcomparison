import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
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
            <img src="https://bulma.io/images/placeholders/48x48.png" alt="" />
            <span className="" style={{ marginLeft: 10 }}>
              DAW Comparison
            </span>
          </Link>
        </div>

        <div className="navbar-menu">
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
