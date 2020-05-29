import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import WhatIsDaw from "../components/WhatIsDaw/WhatIsDaw";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class WhatIsDawPage extends Component {
  render() {
    return (
      <Layout>
        <Helmet>
          <title>What is a DAW? | {config.siteTitle}</title>
          <meta
            name="description"
            content="A DAW, short for digital audio workstation, is a music production software that is best used for recording, editing and producing audio tracks."
          />
        </Helmet>
        <WhatIsDaw />
      </Layout>
    );
  }
}

export default WhatIsDawPage;
