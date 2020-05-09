import React, { useMemo } from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Image = ({ src, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { internal: { mediaType: { regex: "images/" } } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 500, quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () =>
      data.allFile.edges.find(({ node }) => {
        return src === node.relativePath;
      }),
    [data, src]
  );
  if (
    match &&
    match.node &&
    match.node.childImageSharp &&
    match.node.childImageSharp.fluid
  ) {
    return (
      <Img
        fluid={match.node.childImageSharp.fluid}
        objectFit="contain"
        {...props}
      />
    );
  }
  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={src} {...props} />;
};

export default Image;
