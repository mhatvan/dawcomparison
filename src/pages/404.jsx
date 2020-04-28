import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`404 | ${config.siteTitle}`} />
        Oops, 404
      </Layout>
    );
  }
}

export default NotFoundPage;
