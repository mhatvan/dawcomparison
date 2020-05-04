import React, { Component } from "react";
import "./UserLinks.css";

class UserLinks extends Component {
  render() {
    return (
      <div className="user-links">
        <p className="buttons">
          <a
            href="https://github.com/mhatvan"
            target="_blank"
            rel="noopener noreferrer"
            className="button is-dark"
          >
            <span className="icon">
              <i className="fab fa-github" />
            </span>
            <span>GitHub</span>
          </a>
          <a href="mailto:markus_hatvan@aon.at" className="button is-link">
            <span className="icon">
              <i className="fas fa-envelope" />
            </span>
            <span>Email</span>
          </a>
        </p>
      </div>
    );
  }
}

export default UserLinks;
