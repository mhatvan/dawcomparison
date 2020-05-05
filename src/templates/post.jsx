import React from "react";
import { Helmet } from "react-helmet-async";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import { DAWCardDetails } from "../components/DawCard/DawCardDetails";

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
          <title>{`${post.maker} ${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="container">
          <div className="card">
            <div className="card-image">
              <figure className="image is-16by9">
                <iframe
                  title="DAW Video"
                  className="has-ratio"
                  src={post.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <p className="title is-4">
                    {post.title} {post.version}
                  </p>

                  <DAWCardDetails post={post} />
                </div>
                <div className="media-right">
                  <figure className="image is-48x48">
                    <img src={post.logo} alt="DAW logo" />
                  </figure>
                </div>
              </div>

              <div className="content">
                <hr />
                <article className="message">
                  <div className="message-header">
                    <p>Pros & Cons</p>
                  </div>
                  <div className="message-body">
                    <div className="columns is-multiline">
                      <div className="column">
                        {post.pros &&
                          post.pros.map((pro) => {
                            return (
                              <div key={pro}>
                                <span className="icon has-text-success">
                                  <i className="fas fa-plus-circle" />
                                </span>
                                {pro}
                                <br />
                              </div>
                            );
                          })}
                      </div>

                      <div className="column">
                        {post.cons &&
                          post.cons.map((con) => {
                            return (
                              <div key={con}>
                                <span className="icon has-text-danger">
                                  <i className="fas fa-minus-circle" />
                                </span>
                                {con}
                                <br />
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </article>
                <br />
                <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
              </div>
            </div>
            <footer className="card-footer">
              <a
                href={post.website}
                className="card-footer-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </footer>
          </div>

          {/* <div className="post-meta">
            <SocialLinks postPath={slug} postNode={postNode} />
          </div> */}
          {/* <Disqus postNode={postNode} /> */}
          {/* <Footer config={config} /> */}
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
