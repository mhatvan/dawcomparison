import { Link } from "gatsby";
import React, { useState } from "react";
import {
  Alert,
  Col,
  Divider,
  Input,
  Row,
  Select,
  Slider,
  Title,
  Result,
  Button,
} from "../../../node_modules/antd/lib/index";

const initialState = {
  filteredData: [],
  osFilterActive: false,
  makerFilterActive: false,
  priceFilterActive: false,
  query: "",
};

const DawCard = ({ postEdges }) => {
  const [state, setState] = useState(initialState);

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

  const handleOSFilter = (value) => {
    if (!value) {
      return setState({
        filteredData: postList,
        osFilterActive: false,
      });
    }

    const filteredData = postList.filter((post) => {
      return post.os.includes(value);
    });

    return setState({
      filteredData,
      osFilterActive: true,
    });
  };

  const handleMakerFilter = (value) => {
    if (!value || value.length === 0) {
      return setState({
        filteredData: postList,
        makerFilterActive: false,
      });
    }

    const filteredData = postList.filter((post) => {
      return value.includes(post.maker);
    });

    return setState({
      filteredData,
      makerFilterActive: true,
    });
  };

  const handlePriceSliderFilter = (value) => {
    const [min, max] = value;
    const filteredData = postList.filter((post) => {
      const convertedPrice =
        post.price === "Free" ? 0 : +post.price.replace("$", "");

      return convertedPrice >= min && convertedPrice <= max;
    });

    setState({
      filteredData,
      priceFilterActive: true,
    });
  };

  const uniqueMakers = postList.map((post) => post.maker);

  const allOS = postList.map((post) => post.os);
  const uniqueOS = allOS
    .flat()
    .filter((os, idx, arr) => arr.indexOf(os) === idx);

  const {
    filteredData,
    query,
    osFilterActive,
    priceFilterActive,
    makerFilterActive,
  } = state;

  const activeFiltering =
    query || osFilterActive || priceFilterActive || makerFilterActive;

  const posts = activeFiltering ? filteredData : postList;

  const marks = {
    0: "free",
    500: "$500",
    1000: "$1000",
    1500: "$1500",
    2000: "$2000",
  };

  return (
    <div className="container">
      <Row gutter={[16, 8]}>
        <Col xs={24} sm={24} md={10} lg={10} xl={6} xxl={6}>
          <Input
            placeholder="Search for your favorite DAW"
            onChange={handleSearch}
            allowClear
          />
        </Col>
        <Col xs={24} sm={16} md={10} lg={10} xl={6} xxl={6}>
          <Select
            allowClear
            mode="multiple"
            placeholder="Maker"
            optionFilterProp="children"
            onChange={handleMakerFilter}
            style={{ width: "100%" }}
          >
            {uniqueMakers.sort().map((maker) => {
              return (
                <Select.Option key={maker} value={maker}>
                  {maker}
                </Select.Option>
              );
            })}
          </Select>
        </Col>
        <Col xs={24} sm={8} md={4} lg={4} xl={4}>
          <Select
            allowClear
            placeholder="OS"
            optionFilterProp="children"
            onChange={handleOSFilter}
            style={{ width: "100%" }}
          >
            {uniqueOS.map((os) => {
              return (
                <Select.Option key={os} value={os}>
                  {os}
                </Select.Option>
              );
            })}
          </Select>
        </Col>
        <Col xs={24} xl={8} xxl={8}>
          <Slider
            tipFormatter={(value) => `$${value}`}
            range
            step={null}
            marks={marks}
            min={0}
            max={2000}
            defaultValue={[0, 2000]}
            onChange={handlePriceSliderFilter}
          />
        </Col>
      </Row>

      <Row gutter={[16, 16]}>
        <Col xs={24}>
          {activeFiltering ? filteredData.length : postList.length} out of{" "}
          {postList.length} DAWs
        </Col>
      </Row>

      <Row gutter={[16, 32]}>
        {posts.map((post) => {
          return (
            <Col key={post.path} xs={24} sm={12} md={12} lg={8} xl={6}>
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
            </Col>
          );
        })}
      </Row>

      <Row gutter={[16, 32]}>
        <Col span={24}>
          {activeFiltering && filteredData.length === 0 ? (
            <Result
              status="info"
              title="No DAWs found for this search term."
              subTitle="Try another search!"
            />
          ) : (
            <article className="message is-info">
              <div className="message-body">
                Didn't find the DAW you were looking for? Write me on{" "}
                <a
                  href="https://github.com/mhatvan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>{" "}
                or <a href="mailto:markus_hatvan@aon.at">Email</a> to include
                it.
              </div>
            </article>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default DawCard;
