import React, { Component } from "react";
import { OutboundLink } from "gatsby-plugin-gtag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./UserLinks.css";

class UserLinks extends Component {
  render() {
    return (
      <div className="user-links">
        <p className="buttons">
          <OutboundLink
            href="https://github.com/mhatvan"
            target="_blank"
            rel="noopener noreferrer"
            className="button is-dark"
          >
            <FontAwesomeIcon icon={faGithub} />
            <span>GitHub</span>
          </OutboundLink>
          <OutboundLink
            href="mailto:markus_hatvan@aon.at"
            className="button is-link"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span>Email</span>
          </OutboundLink>
        </p>
      </div>
    );
  }
}

export default UserLinks;
