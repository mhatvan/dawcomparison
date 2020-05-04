import React, { useState } from "react";
import { Link } from "gatsby";

const DawCard = ({ postEdges }) => {
  const [state, setState] = useState({
    filteredData: [],
    query: "",
  });

  const getPostList = () => {
    return (postEdges || []).map(({ node }) => ({
      path: node.fields.slug,
      tags: node.frontmatter.tags,
      cover: node.frontmatter.cover,
      title: node.frontmatter.title,
      date: node.fields.date,
      excerpt: node.excerpt,
      timeToRead: node.timeToRead,
      price: node.frontmatter.price,
      os: node.frontmatter.os,
      genre: node.frontmatter.genre,
      useCase: node.frontmatter.useCase,
      maker: node.frontmatter.maker,
      logo: node.frontmatter.logo,
      version: node.frontmatter.version,
      website: node.frontmatter.website,
    }));
  };

  const postList = getPostList();
  const handleSearch = (event) => {
    const query = event.target.value;

    const filteredData = postList.filter((post) => {
      return post.title.toLowerCase().includes(query.toLowerCase());
    });

    setState({
      query,
      filteredData,
    });
  };

  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query;
  const posts = hasSearchResults ? filteredData : postList;

  return (
    <>
      <div className="container">
        <div className="columns">
          <div className="column is-two-thirds">
            <p className="control has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="Search"
                onChange={handleSearch}
              />
              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true" />
              </span>
            </p>
          </div>

          <div className="column is-one-third">
            <div className="dropdown is-hoverable">
              <div className="dropdown-trigger">
                <button
                  type="button"
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>OS</span>
                  <span className="icon is-small">
                    <i className="fas fa-angle-down" aria-hidden="true" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="#" className="dropdown-item">
                    Windows
                  </a>
                  <a href="#" className="dropdown-item">
                    macOS
                  </a>
                  <a href="#" className="dropdown-item">
                    Linux
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        {query && filteredData.length === 0 && (
          <div>No DAWs found with this search term</div>
        )}

        <div className="columns is-multiline">
          {posts.map((post) => {
            return (
              <div
                key={post.path}
                className="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
              >
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={post.cover} alt="DAW preview" />
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

                    <div className="content">{post.excerpt}</div>
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
              </div>
            );
          })}
        </div>
        <article className="message is-info is-medium">
          <div className="message-body">
            Didn't find the DAW you were looking for? Write me on GitHub or
            Email to include it.
          </div>
        </article>
      </div>
    </>
  );
};

export default DawCard;
