import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Imprint from "../components/Imprint/Imprint";

class ImprintPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Helmet title={`Imprint | ${config.siteTitle}`} />
          <Imprint />
        </div>
      </Layout>
    );
  }
}

export default ImprintPage;
