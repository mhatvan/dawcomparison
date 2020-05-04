import React from "react";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
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

    console.log(234, post);

    return (
      <Layout>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <div className="container">
          <div className="card">
            <div className="card-image">
              <figure className="image is-16by9">
                <iframe
                  title="DAW Video"
                  className="has-ratio"
                  width="640"
                  height="360"
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
                    <Link to={post.path} key={post.title}>
                      {post.title} {post.version}
                    </Link>
                  </p>

                  <p className="subtitle is-6">
                    <span style={{ color: "grey" }}>by {post.maker}</span>

                    <br />
                    <br />

                    <span className="icon has-text-info">
                      <i className="fas fa-tag" />
                    </span>
                    {post.price}
                    <br />
                    <span className="icon has-text-info">
                      <i className="fas fa-music" />
                    </span>
                    {post.genre}
                    <br />
                    <span className="icon has-text-info">
                      <i className="fas fa-microphone-alt" />
                    </span>
                    {post.useCase}
                    <br />
                    <span className="icon has-text-info">
                      <i className="fas fa-desktop" />
                    </span>
                    {post.os && post.os.join(", ")}
                    <br />
                  </p>
                </div>
                <div className="media-right">
                  <figure className="image is-48x48">
                    <img src={post.logo} alt="DAW logo" />
                  </figure>
                </div>
              </div>

              {/* <div className="content">{post.excerpt}</div> */}
              <div className="content">
                <article className="message">
                  <div className="message-header">
                    <p>Pros & Cons</p>
                  </div>
                  <div className="message-body">
                    <div className="columns is-multiline">
                      <div className="column">
                        <span className="icon has-text-success">
                          <i className="fas fa-plus-circle" />
                        </span>
                        Lifetime free updates
                        <br />
                        <span className="icon has-text-success">
                          <i className="fas fa-plus-circle" />
                        </span>
                        Lifetime free updates
                        <br />
                        <span className="icon has-text-success">
                          <i className="fas fa-plus-circle" />
                        </span>
                        Lifetime free updates
                      </div>
                      <div className="column">
                        <span className="icon has-text-danger">
                          <i className="fas fa-minus-circle" />
                        </span>
                        Recording
                        <br />
                        <span className="icon has-text-danger">
                          <i className="fas fa-minus-circle" />
                        </span>
                        Recording
                        <br />
                        <span className="icon has-text-danger">
                          <i className="fas fa-minus-circle" />
                        </span>
                        Recording
                        <br />
                      </div>
                    </div>
                  </div>
                </article>
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

          {/* <div dangerouslySetInnerHTML={{ __html: postNode.html }} /> */}
          {/* <div className="post-meta">
            <PostTags tags={post.tags} />
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
        category
        tags
        video
        price
        os
        genre
        useCase
        maker
        logo
        version
        website
      }
      fields {
        slug
        date
      }
    }
  }
`;
