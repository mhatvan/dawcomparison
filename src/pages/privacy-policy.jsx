import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";

class PrivacyPolicyPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Privacy Policy | {config.siteTitle}</title>
          <meta
            name="description"
            content="When you visit websites today, certain information is automatically created and stored, including on this website."
          />
        </Helmet>
        <PrivacyPolicy />
      </Layout>
    );
  }
}

export default PrivacyPolicyPage;
