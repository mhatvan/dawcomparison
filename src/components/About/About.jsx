import React, { Component } from "react";
import { Typography } from "antd";
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";

import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <Typography.Title>About</Typography.Title>

        <Typography.Paragraph>
          This open-source and non-profit project is meant to help out bedroom
          producers, audiophile hobbyists & bands who are just starting out to
          find the perfect DAW for their use case.
        </Typography.Paragraph>

        <Typography.Paragraph>
          It is a win-win situation: I want to learn about{" "}
          <a href="https://www.gatsbyjs.org/">Gatsby</a>, visitors of the
          website can gather information and the companies behind the DAWs get
          free promotion.
        </Typography.Paragraph>

        <Typography.Paragraph>
          Since I started producing electronic music a couple years ago, I was
          interested in trying and checking out new tools like DAWs or VSTs.
        </Typography.Paragraph>

        <Typography.Paragraph>
          The website provides an easy way of filtering content based on DAW
          title, price and more options to compare the various available DAWs.
        </Typography.Paragraph>

        <UserLinks config={config} labeled />
      </div>
    );
  }
}

export default About;
