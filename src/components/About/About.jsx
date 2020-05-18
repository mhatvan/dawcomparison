import { Typography } from "antd";
import React, { Component } from "react";
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
          find the perfect digital audio workstation (DAW) for their use case.
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

        <Typography.Title level={4}>
          Interested in contributing to the content or adding new features?
        </Typography.Title>

        <Typography.Paragraph>
          Just open a pull request or start a new feature request for{" "}
          <a
            href="https://github.com/mhatvan/dawcomparison"
            target="_blank"
            rel="noopener noreferrer"
          >
            DAW Comparison
          </a>
          , or contact me through the channels below:
        </Typography.Paragraph>

        <UserLinks config={config} labeled />
        <Typography.Title level={4} style={{ marginTop: 30 }}>
          If you liked the content, a tip would be awesome!
        </Typography.Title>
        <Typography.Paragraph>
          <a
            className="bmc-button"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.buymeacoffee.com/mhatvan"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
              alt="Buy me a coffee"
            />
            <span style={{ marginLeft: 5, fontSize: 19 }}>Buy me a coffee</span>
          </a>
        </Typography.Paragraph>
        <Typography.Paragraph>
          BTC <code>15UgBxhsGAUPmtqMQAFpkVUuqLa6e3rzGp</code>
        </Typography.Paragraph>
        <Typography.Paragraph>
          ETH <code>0xc7f207503E83F74bF4628c5b60d2Fb8fdd7977E4</code>
        </Typography.Paragraph>
        <Typography.Paragraph>
          XRP <code>rpkbvS8QG9pzcVPMQux8ug4T5L2B74eGfo</code>
        </Typography.Paragraph>
        <Typography.Paragraph>
          LTC <code>Le7jKe5Y5s8EHXLMVHruSzcj2PJbnyeD53</code>
        </Typography.Paragraph>
      </div>
    );
  }
}

export default About;
