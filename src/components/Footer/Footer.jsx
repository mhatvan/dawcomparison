import { Typography, Menu, Space, Col } from "antd";
import { Link } from "gatsby";
import React from "react";
import "./Footer.css";

const Footer = ({ config }) => {
  return (
    <footer className="footer">
      <Col xs={24} md={12} id="copyright">
        <Space size="large">
          <Typography.Text>{config.copyright}</Typography.Text>
        </Space>
      </Col>
      <Col xs={24} md={12} style={{ textAlign: "right" }}>
        <Menu mode="horizontal">
          <Menu.Item key="imprint">
            <Link to="/imprint">Imprint</Link>
          </Menu.Item>
          <Menu.Item key="privacy-policy">
            <Link to="/privacy-policy">Privacy Policy</Link>
          </Menu.Item>
        </Menu>
      </Col>
    </footer>
  );
};

export default Footer;
