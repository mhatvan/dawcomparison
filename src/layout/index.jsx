import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./index.scss";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Navbar />
        <div className="layout-container">
          <Helmet>
            <meta name="description" content={config.siteDescription} />
            <html lang="en" className="has-navbar-fixed-top" />
          </Helmet>
          {children}
        </div>
        <Footer config={config} />
      </>
    );
  }
}
