import React, { Component } from "react";
import { OutboundLink } from "gatsby-plugin-gtag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./UserLinks.css";
import { Button } from "antd";

class UserLinks extends Component {
  render() {
    return (
      <div className="user-links">
        <OutboundLink
          href="https://github.com/mhatvan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            type="primary"
            icon={<FontAwesomeIcon icon={faGithub} />}
            style={{ marginRight: 5 }}
          >
            <span style={{ marginLeft: 5 }}>GitHub</span>
          </Button>
        </OutboundLink>
        <OutboundLink href="mailto:markus_hatvan@aon.at">
          <Button type="primary" icon={<FontAwesomeIcon icon={faEnvelope} />}>
            <span style={{ marginLeft: 5 }}>Email</span>
          </Button>
        </OutboundLink>
      </div>
    );
  }
}

export default UserLinks;
