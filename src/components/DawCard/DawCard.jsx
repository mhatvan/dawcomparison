import { LayoutOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Link } from "gatsby";
import React, { useState, useEffect, useCallback } from "react";
import { flatten } from "lodash";
import { OutboundLink } from "gatsby-plugin-gtag";
import { Button, Col, Input, Result, Row, Select, Slider, Tag } from "antd";
import { DAWCardDetails } from "./DawCardDetails";
import { DawTable } from "./DawTable";
import Image from "../Image";

const DawCard = ({ postEdges }) => {
  const [query, setQuery] = useState("");
  const [makerFilterValue, setMakerFilterValue] = useState([]);
  const [useCaseFilterValue, setUseCaseFilterValue] = useState(null);
  const [osFilterValue, setOsFilterValue] = useState(null);
  const [priceFilterValue, setPriceFilterValue] = useState(null);

  const [filteredData, setFilteredData] = useState(null);
  const [viewMode, setViewMode] = useState(null);

  const getPostList = useCallback(() => {
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
  }, [postEdges]);

  useEffect(() => {
    setViewMode(localStorage.getItem("viewmode") || "card");

    let postList = getPostList();

    if (query) {
      const trimmedQuery = query.trim();
      postList = postList.filter(
        (post) =>
          post.title.toLowerCase().includes(trimmedQuery.toLowerCase()) ||
          post.maker.toLowerCase().includes(trimmedQuery.toLowerCase())
      );
    }

    if (makerFilterValue.length > 0) {
      postList = postList.filter((post) =>
        makerFilterValue.includes(post.maker)
      );
    }

    if (useCaseFilterValue) {
      postList = postList.filter((post) =>
        post.useCase.includes(useCaseFilterValue)
      );
    }

    if (osFilterValue) {
      postList = postList.filter((post) => post.os.includes(osFilterValue));
    }

    if (priceFilterValue) {
      const [min, max] = priceFilterValue;
      postList = postList.filter((post) => {
        const convertedPrice =
          post.price === "Free" ? 0 : +post.price.replace("$", "");

        return convertedPrice >= min && convertedPrice <= max;
      });
    }

    setFilteredData(postList);
  }, [
    getPostList,
    makerFilterValue,
    osFilterValue,
    priceFilterValue,
    query,
    useCaseFilterValue,
  ]);

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    setQuery(searchQuery);
  };

  const handleOSFilter = (value) => {
    setOsFilterValue(value);
  };

  const handleUseCaseFilter = (value) => {
    setUseCaseFilterValue(value);
  };

  const handleMakerFilter = (value) => {
    setMakerFilterValue(value);
  };

  const handlePriceSliderFilter = (value) => {
    setPriceFilterValue(value);
  };

  const postList = getPostList();

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

  const activeFiltering =
    query ||
    makerFilterValue.length > 0 ||
    useCaseFilterValue ||
    osFilterValue ||
    priceFilterValue;

  const posts = activeFiltering ? filteredData : postList;

  const marks = {
    0: "free",
    500: "$500",
    1000: "$1000",
    1500: "$1500",
    2000: "$2000",
  };

  const changeViewMode = (mode) => {
    setViewMode(mode);
    localStorage.setItem("viewmode", mode);
  };

  return (
    <div className="container">
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
              {...(viewMode === "card" ? { type: "primary" } : {})}
            />
            <Button
              onClick={() => changeViewMode("list")}
              icon={<UnorderedListOutlined />}
              title="List view"
              {...(viewMode === "list" ? { type: "primary" } : {})}
            />
          </Button.Group>
        </Col>
      </Row>
      <Row gutter={[16, 32]}>
        {viewMode === "list" ? (
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
                    <Image src={post.cover.slice(1)} alt="DAW preview" />
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
                            <Image src={post.logo.slice(1)} alt="DAW logo" />
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
          viewMode === "card" ? (
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
