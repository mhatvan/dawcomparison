import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import WhatIsDaw from "../components/WhatIsDaw/WhatIsDaw";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class WhatIsDawPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`What is a DAW? | ${config.siteTitle}`} />
        <WhatIsDaw />
      </Layout>
    );
  }
}

export default WhatIsDawPage;
