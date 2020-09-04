import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import React, { useState, useEffect, useCallback } from "react";
import { flatten } from "lodash";
import {
  Button,
  Col,
  Input,
  Result,
  Row,
  Select,
  Slider,
  Tag,
  Card,
  Alert,
} from "antd";
import Image from "../Image";
import { DAWCardDetails } from "./DawCardDetails";
import { DawTable } from "./DawTable";

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
    250: "$250",
    500: "$500",
    750: "$750",
    1000: "$1000",
    1250: "$1250",
  };

  const changeViewMode = (mode) => {
    setViewMode(mode);
    localStorage.setItem("viewmode", mode);
  };

  return (
    <div className="container">
      <h1>Find the ideal digital audio workstation for your needs.</h1>
      <h2>
        Compare digital audio workstations for music production that are
        available on the market.
      </h2>
      <p>We display a breakdown of the pros & cons different DAWs offer.</p>
      <p>
        The best digital audio workstation for your individual use case is
        waiting for you!
      </p>
      <p>
        You will find the optimal fit for your needs through our easy-to-use
        interface that will deliver you the right music production software.
      </p>

      <br />

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
            placeholder="Operating system"
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
            max={1250}
            defaultValue={[0, 1250]}
            onChange={handlePriceSliderFilter}
          />
        </Col>
      </Row>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={16}>
          <Tag color="blue">
            Displaying{" "}
            <b>{activeFiltering ? filteredData.length : postList.length} </b>
            out of {postList.length} DAWs
          </Tag>
        </Col>

        <Col xs={8} style={{ textAlign: "right" }}>
          <Button.Group>
            <Button
              onClick={() => changeViewMode("card")}
              icon={<FontAwesomeIcon icon={faSquare} />}
              title="Card view"
              {...(viewMode === "card" ? { type: "primary" } : {})}
            />

            <Button
              onClick={() => changeViewMode("table")}
              icon={<FontAwesomeIcon icon={faTable} />}
              title="Table view"
              {...(viewMode === "table" ? { type: "primary" } : {})}
            />
          </Button.Group>
        </Col>
      </Row>
      <Row gutter={[16, 32]}>
        {viewMode === "table" ? (
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
                  xxl={8}
                >
                  <Card
                    cover={
                      <>
                        <Link to={post.path} key={post.title}>
                          <Image
                            src={post.cover.relativePath}
                            alt="DAW preview"
                          />
                        </Link>
                      </>
                    }
                    className="cardBoxShadow"
                    actions={[
                      <a
                        key={0}
                        href={post.website}
                        className="card-footer-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>,
                    ]}
                  >
                    <Card.Meta
                      title={
                        <>
                          <Link to={post.path} key={post.title}>
                            {post.title} {post.version}
                          </Link>
                          <br />
                          by {post.maker}
                        </>
                      }
                      description={<DAWCardDetails post={post} />}
                    />

                    <div className="logo-wrapper">
                      <Image src={post.logo.relativePath} alt="DAW logo" />
                    </div>
                  </Card>
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
            viewMode === "card" && (
              <Result
                status="info"
                title="No DAWs found for this search term."
                subTitle="Try another search!"
              />
            )}
          <>
            <Alert
              message="Note that all prices listed above are estimated and can be
                  deviating due to currency differences or active discounts."
              type="info"
            />
            <br />
            <Alert
              message={
                <>
                  Didn&#39;t find the DAW you were looking for or found a bug?
                  Write me on{" "}
                  <a
                    href="https://github.com/mhatvan/dawcomparison/issues/new"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  or <a href="mailto:markus_hatvan@aon.at">Email</a> to include
                  it.
                </>
              }
              type="info"
            />
          </>
        </Col>
      </Row>
    </div>
  );
};

export default DawCard;
