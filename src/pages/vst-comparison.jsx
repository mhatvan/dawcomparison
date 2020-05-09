import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import VSTComparison from "../components/VstComparison/VstComparison";

class VSTComparisonPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Helmet title={`VST Comparison | ${config.siteTitle}`} />
          <VSTComparison />
        </div>
      </Layout>
    );
  }
}

export default VSTComparisonPage;
