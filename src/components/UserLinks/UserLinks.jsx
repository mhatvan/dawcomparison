import React, { Component } from "react";
import { OutboundLink } from "gatsby-plugin-gtag";
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
            <span className="icon">
              <i className="fab fa-github" />
            </span>
            <span>GitHub</span>
          </OutboundLink>
          <OutboundLink
            href="mailto:markus_hatvan@aon.at"
            className="button is-link"
          >
            <span className="icon">
              <i className="fas fa-envelope" />
            </span>
            <span>Email</span>
          </OutboundLink>
        </p>
      </div>
    );
  }
}

export default UserLinks;
