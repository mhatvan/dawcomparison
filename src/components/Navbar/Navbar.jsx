import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Menu, Drawer, Button } from "antd";
import "./Navbar.css";

const RightMenu = ({ mode = "horizontal" }) => (
  <Menu mode={mode}>
    {/* <Menu.Item key="what-is-daw">
      <Link to="/what-is-daw">What is a DAW?</Link>
    </Menu.Item> */}
    <Menu.Item key="about">
      <Link to="/about">About</Link>
    </Menu.Item>
    {/* <Menu.Item key="vst-comparison">
      <Link to="/vst-comparison">VST Comparison</Link>
    </Menu.Item> */}
    <Menu.Item key="github">
      <OutboundLink
        href="https://github.com/mhatvan/dawcomparison"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
        {/* <FontAwesomeIcon icon={faGithub} style={{ width: 14 }} /> */}
      </OutboundLink>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav className="navbar is-fixed-top">
      <Link to="/" style={{ paddingLeft: 15 }}>
        <img
          src="/logos/dawcomparison-logo-48.png"
          width="36"
          alt="DAW Comparison Logo"
        />
        <span style={{ marginLeft: 10, color: "rgba(0, 0, 0, 0.65)" }}>
          DAW Comparison{" "}
        </span>
      </Link>
      <div className="rightMenu">
        <RightMenu />
      </div>

      <Button className="burgerPos" onClick={showDrawer}>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <Drawer
        title="DAW Comparison"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <RightMenu mode="vertical" />
      </Drawer>
    </nav>
  );
};
export default Navbar;
