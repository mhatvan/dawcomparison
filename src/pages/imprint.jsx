import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Imprint from "../components/Imprint/Imprint";

class ImprintPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>Imprint | {config.siteTitle}</title>
          <meta
            name="description"
            content="Duty to inform according to §5 E-Commerce Law, §14 Company Code, §63 Trade Code and disclosure duty according to §25 of Austrian Media Law."
          />
        </Helmet>
        <Imprint />
      </Layout>
    );
  }
}

export default ImprintPage;
