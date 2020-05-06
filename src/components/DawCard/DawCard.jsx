import { LayoutOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { flatten } from "lodash";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Button, Col, Input, Result, Row, Select, Slider, Tag } from "antd";
import { DAWCardDetails } from "./DawCardDetails";
import { DawTable } from "./DawTable";

const initialState = {
  filteredData: [],
  filterActive: false,
  query: "",
  viewmode: null,
};

const DawCard = ({ postEdges }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState({
      ...state,
      viewmode: localStorage.getItem("viewmode") || "card",
    });
  }, []);

  const getPostList = () => {
    return (postEdges || []).map(({ node }) => ({
      path: node.fields.slug,
      cover: node.frontmatter.cover,
      title: node.frontmatter.title,
      price: node.frontmatter.price,
      os: node.frontmatter.os,
      genre: node.frontmatter.genre,
      useCase: node.frontmatter.useCase,
      maker: node.frontmatter.maker,
      logo: node.frontmatter.logo,
      version: node.frontmatter.version,
      website: node.frontmatter.website,
      plugin: node.frontmatter.plugin,
      interface: node.frontmatter.interface,
    }));
  };

  const postList = getPostList();

  const handleSearch = (event) => {
    const query = event.target.value;

    const filteredData = postList.filter((post) => {
      return post.title.toLowerCase().includes(query.toLowerCase());
    });

    setState({
      ...state,
      query,
      filteredData,
    });
  };

  const handleOSFilter = (value) => {
    if (!value) {
      return setState({
        ...state,
        filteredData: postList,
        filterActive: false,
      });
    }

    const filteredData = postList.filter((post) => {
      return post.os.includes(value);
    });

    return setState({
      ...state,
      filteredData,
      filterActive: true,
    });
  };

  const handleUseCaseFilter = (value) => {
    if (!value) {
      return setState({
        ...state,
        filteredData: postList,
        filterActive: false,
      });
    }

    const filteredData = postList.filter((post) => {
      return post.useCase.includes(value);
    });

    return setState({
      ...state,
      filteredData,
      filterActive: true,
    });
  };

  const handleMakerFilter = (value) => {
    if (!value || value.length === 0) {
      return setState({
        ...state,
        filteredData: postList,
        filterActive: false,
      });
    }

    const filteredData = postList.filter((post) => {
      return value.includes(post.maker);
    });

    return setState({
      ...state,
      filteredData,
      filterActive: true,
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
      ...state,
      filteredData,
      filterActive: true,
    });
  };

  const uniqueMakers = postList
    .map((post) => post.maker)
    .filter((os, idx, arr) => arr.indexOf(os) === idx);

  const allOS = postList.map((post) => post.os);
  const uniqueOS = flatten(allOS).filter(
    (os, idx, arr) => arr.indexOf(os) === idx
  );

  const allUseCases = postList.map((post) => post.useCase);
  const uniqueUseCases = flatten(allUseCases).filter(
    (useCase, idx, arr) => arr.indexOf(useCase) === idx
  );

  const { filteredData, query, filterActive, viewmode } = state;

  const activeFiltering = query || filterActive;

  const posts = activeFiltering ? filteredData : postList;

  const marks = {
    0: "free",
    500: "$500",
    1000: "$1000",
    1500: "$1500",
    2000: "$2000",
  };

  const changeViewMode = (mode) => {
    setState({ ...state, viewmode: mode });
    localStorage.setItem("viewmode", mode);
  };

  return (
    <div className="container">
      {/* <Affix offsetTop={4}> */}
      <Row gutter={[16, 8]} align="middle">
        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Input
            placeholder="Search for your favorite DAW"
            onChange={handleSearch}
            allowClear
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
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
        <Col xs={24} sm={12} md={12} lg={12} xl={8}>
          <Select
            allowClear
            placeholder="Use case"
            optionFilterProp="children"
            onChange={handleUseCaseFilter}
            style={{ width: "100%" }}
          >
            {uniqueUseCases.map((useCase) => {
              return (
                <Select.Option key={useCase} value={useCase}>
                  {useCase}
                </Select.Option>
              );
            })}
          </Select>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={4}>
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
        <Col
          xs={{ span: 22, offset: 1 }}
          sm={{ span: 22, offset: 1 }}
          md={{ span: 22, offset: 1 }}
          xl={{ span: 10, offset: 1 }}
          xxl={{ span: 10, offset: 1 }}
        >
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
      <Row gutter={[16, 16]} align="middle">
        <Col xs={12}>
          <Tag color="blue">
            Displaying{" "}
            <b>{activeFiltering ? filteredData.length : postList.length} </b>
            out of {postList.length} DAWs
          </Tag>
        </Col>

        <Col xs={12} style={{ textAlign: "right" }}>
          <Button.Group>
            <Button
              onClick={() => changeViewMode("card")}
              icon={<LayoutOutlined />}
              title="Card view"
              {...(viewmode === "card" ? { type: "primary" } : {})}
            />
            <Button
              onClick={() => changeViewMode("list")}
              icon={<UnorderedListOutlined />}
              title="List view"
              {...(viewmode === "list" ? { type: "primary" } : {})}
            />
          </Button.Group>
        </Col>
      </Row>
      {/* </Affix> */}
      <Row gutter={[16, 32]}>
        {viewmode === "list" ? (
          <Col xs={24}>
            <DawTable posts={posts} />
          </Col>
        ) : (
          <>
            {posts.map((post) => {
              return (
                <Col
                  key={post.path}
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={8}
                  xxl={6}
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

                          <DAWCardDetails post={post} />
                        </div>
                        <div className="media-right">
                          <figure className="image is-48x48">
                            <img src={post.logo} alt="DAW logo" />
                          </figure>
                        </div>
                      </div>
                    </div>
                    <footer className="card-footer">
                      <OutboundLink
                        href={post.website}
                        className="card-footer-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </OutboundLink>
                    </footer>
                  </div>
                </Col>
              );
            })}
          </>
        )}
      </Row>
      <Row gutter={[16, 32]}>
        <Col span={24}>
          {activeFiltering &&
          filteredData.length === 0 &&
          viewmode === "card" ? (
            <Result
              status="info"
              title="No DAWs found for this search term."
              subTitle="Try another search!"
            />
          ) : (
            <>
              <article className="message is-info">
                <div className="message-body">
                  Note that all prices listed above are estimated and can be
                  deviating due to currency differences or active discounts.
                </div>
              </article>
              <article className="message is-info">
                <div className="message-body">
                  Didn&#39;t find the DAW you were looking for? Write me on{" "}
                  <OutboundLink
                    href="https://github.com/mhatvan"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </OutboundLink>{" "}
                  or{" "}
                  <OutboundLink href="mailto:markus_hatvan@aon.at">
                    Email
                  </OutboundLink>{" "}
                  to include it.
                </div>
              </article>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default DawCard;
