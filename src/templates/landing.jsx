import React from "react";
import { Helmet } from "react-helmet-async";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import DawCard from "../components/DawCard/DawCard";

class Landing extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        <Helmet title={config.siteTitle} />

        <SEO />

        <DawCard postEdges={postEdges} />
      </Layout>
    );
  }
}

export default Landing;

export const pageQuery = graphql`
  query LandingQuery {
    allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt
          timeToRead
          frontmatter {
            title
            cover {
              relativePath
            }
            date
            price
            os
            genre
            useCase
            maker
            logo {
              relativePath
            }
            version
            website
            plugin
            interface
          }
        }
      }
    }
  }
`;
