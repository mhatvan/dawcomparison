import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import TermsOfService from "../components/TermsOfService/TermsOfService";

class TermsOfServicePage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Helmet title={`Terms of Service | ${config.siteTitle}`} />
          <TermsOfService />
        </div>
      </Layout>
    );
  }
}

export default TermsOfServicePage;
