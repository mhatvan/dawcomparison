import React, { useEffect } from "react";
import UserLinks from "../UserLinks/UserLinks";
import "./Footer.css";

const Footer = ({ config }) => {
  return (
    <footer className="footer">
      <div className="notice-container">
        <h4>
          Based on{" "}
          <a href="https://github.com/Vagr9K/gatsby-advanced-starter">
            Gatsby Advanced Starter
          </a>
        </h4>
        <br />
        <h4>{config.copyright}</h4>
        <br />
        <UserLinks config={config} labeled />
      </div>
    </footer>
  );
};

export default Footer;
