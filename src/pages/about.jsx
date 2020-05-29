import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>About | {config.siteTitle}</title>
          <meta
            name="description"
            content="This open-source and non-profit project is meant to help out bedroom producers, audiophile hobbyists & new bands."
          />
        </Helmet>
        <About />
      </Layout>
    );
  }
}

export default AboutPage;
