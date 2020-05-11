import React from "react";
import { Helmet } from "react-helmet-async";
import { graphql } from "gatsby";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Card, Col, Row } from "antd";
import { faMinusCircle, faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import {
  DAWCardDetails,
  IconAndText,
} from "../components/DawCard/DawCardDetails";
import SocialLinks from "../components/SocialLinks/SocialLinks";
import Disqus from "../components/Disqus/Disqus";
import Image from "../components/Image";

import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }

    return (
      <Layout>
        <Helmet>
          <title>{`${post.maker} ${post.version} by ${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="container">
          <Card
            cover={
              <div className="video_wrapper">
                <iframe
                  title="DAW Video"
                  className="iframe-style"
                  src={post.video}
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            }
            actions={[
              <SocialLinks key={0} postPath={slug} postNode={postNode} />,
            ]}
          >
            <Card.Meta
              title={
                <>
                  <OutboundLink
                    href={post.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.title} {post.version}
                  </OutboundLink>
                  <br />
                  by {post.maker}
                </>
              }
              description={
                <>
                  <DAWCardDetails post={post} />

                  <br />
                  <Card title="Pros & Cons">
                    <Row>
                      <Col span={12}>
                        {post.pros &&
                          post.pros.map((pro) => {
                            return (
                              <div key={pro}>
                                <IconAndText icon={faPlusCircle} text={pro} />
                              </div>
                            );
                          })}
                      </Col>
                      <Col span={12}>
                        {post.cons &&
                          post.cons.map((con) => {
                            return (
                              <div key={con}>
                                <IconAndText icon={faMinusCircle} text={con} />
                              </div>
                            );
                          })}
                      </Col>
                    </Row>
                  </Card>

                  <br />

                  <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
                </>
              }
            />

            <div className="logo-wrapper">
              <Image src={post.logo.slice(1)} alt="DAW logo" />
            </div>
          </Card>

          <Disqus postNode={postNode} />
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        video
        price
        os
        genre
        useCase
        maker
        logo
        version
        website
        pros
        cons
        plugin
        interface
      }
      fields {
        slug
        date
      }
    }
  }
`;
