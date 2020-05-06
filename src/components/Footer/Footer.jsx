import React from "react";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Typography, Col } from "antd";
import { Link } from "gatsby";
import "./Footer.css";

const Footer = ({ config }) => {
  return (
    <footer className="footer">
      <div className="notice-container">
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/imprint" className="navbar-item">
              Imprint
            </Link>
            <Link to="/privacy-policy" className="navbar-item">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="navbar-item">
              Terms of Service
            </Link>
            <Typography.Text className="navbar-item">
              {config.copyright}
            </Typography.Text>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
