import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`About | ${config.siteTitle}`} />
        <About />
      </Layout>
    );
  }
}

export default AboutPage;
