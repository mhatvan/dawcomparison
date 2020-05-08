import { Typography, Menu } from "antd";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-gtag";
import React from "react";

const Footer = ({ config }) => {
  return (
    <footer className="footer">
      <Typography.Text>{config.copyright}</Typography.Text>

      <OutboundLink
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.buymeacoffee.com/mhatvan"
      >
        Buy me a coffee
      </OutboundLink>
      <Menu mode="horizontal">
        <Menu.Item key="imprint">
          <Link to="/imprint">Imprint</Link>
        </Menu.Item>
        <Menu.Item key="privacy-policy">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </Menu.Item>
        <Menu.Item key="terms-of-service">
          <Link to="/terms-of-service">Terms of Service</Link>
        </Menu.Item>
      </Menu>
    </footer>
  );
};

export default Footer;
