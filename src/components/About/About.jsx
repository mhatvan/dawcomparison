import React, { Component } from "react";
import { Typography } from "antd";

import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <Typography.Title>About</Typography.Title>

        <Typography.Paragraph>
          This project is meant to help out producers / audiophile hobbyists /
          bands to find the perfect DAW for their use case. The website provides
          an easy way of filtering based on DAW title, price and more to compare
          DAWs next to each other.
        </Typography.Paragraph>
      </div>
    );
  }
}

export default About;
