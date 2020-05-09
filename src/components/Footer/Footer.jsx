import { Typography, Menu, Space, Button, Col } from "antd";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-gtag";
import React from "react";
import "./Footer.css";

const Footer = ({ config }) => {
  return (
    <footer className="footer">
      <Col xs={24} md={12}>
        <Space size="large">
          <Typography.Text>{config.copyright}</Typography.Text>

          <Button>
            <OutboundLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.buymeacoffee.com/mhatvan"
            >
              Buy me a coffee
            </OutboundLink>
          </Button>
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
          <Menu.Item key="terms-of-service">
            <Link to="/terms-of-service">Terms of Service</Link>
          </Menu.Item>
        </Menu>
      </Col>
    </footer>
  );
};

export default Footer;

// const Footer = ({ config }) => {
//   return (
//     <footer className="footer">
//       <Space size="large">
//         <Typography.Text>{config.copyright}</Typography.Text>

//         <Button>
//           <OutboundLink
//             target="_blank"
//             rel="noopener noreferrer"
//             href="https://www.buymeacoffee.com/mhatvan"
//           >
//             Buy me a coffee
//           </OutboundLink>
//         </Button>
//       </Space>

//       <Menu mode="horizontal">
//         <Menu.Item key="imprint">
//           <Link to="/imprint">Imprint</Link>
//         </Menu.Item>
//         <Menu.Item key="privacy-policy">
//           <Link to="/privacy-policy">Privacy Policy</Link>
//         </Menu.Item>
//         <Menu.Item key="terms-of-service">
//           <Link to="/terms-of-service">Terms of Service</Link>
//         </Menu.Item>
//       </Menu>
//     </footer>
//   );
// };

// export default Footer;
