import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

class PrivacyPolicyPage extends Component {
  render() {
    return (
      <Layout>
        <div className="privacy-policy-container">
          <Helmet title={`Privacy Policy | ${config.siteTitle}`} />
          <PrivacyPolicy />
        </div>
      </Layout>
    );
  }
}

export default PrivacyPolicyPage;
