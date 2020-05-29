import React, { useState } from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Menu, Drawer, Button } from "antd";
import "./Navbar.css";

const RightMenu = ({ mode = "horizontal" }) => (
  <Menu mode={mode}>
    <Menu.Item key="what-is-daw">
      <Link to="/what-is-daw">What is a DAW?</Link>
    </Menu.Item>
    <Menu.Item key="about">
      <Link to="/about">About</Link>
    </Menu.Item>
    {/* <Menu.Item key="vst-comparison">
      <Link to="/vst-comparison">VST Comparison</Link>
    </Menu.Item> */}
    <Menu.Item key="github">
      <a
        href="https://github.com/mhatvan/dawcomparison"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span style={{ marginRight: 10 }}>Github</span>
        <FontAwesomeIcon icon={faGithub} style={{ width: 14 }} />
      </a>
    </Menu.Item>
  </Menu>
);

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleDrawer = () => {
    setVisible(!visible);
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

      <Button className="burgerPos" onClick={toggleDrawer}>
        <FontAwesomeIcon icon={faBars} style={{ width: "0.875em" }} />
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
