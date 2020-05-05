import { LayoutOutlined, UnorderedListOutlined } from "@ant-design/icons";
import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
import { flatten } from "lodash";
import { OutboundLink } from "gatsby-plugin-gtag";
import {
  Button,
  Col,
  Input,
  Result,
  Row,
  Select,
  Slider,
  Table,
} from "../../../node_modules/antd/lib/index";

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

  const mapThis = posts.map((post) => {
    return {
      key: post.path,
      title: `${post.title} ${post.version}`,
      maker: post.maker,
      os: post.os.join(", "),
      price: post.price,
      website: post.website,
    };
  });

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => {
        return a.title.localeCompare(b.title);
      },
    },
    {
      title: "Maker",
      dataIndex: "maker",
      key: "maker",
      sorter: (a, b) => {
        return a.maker.localeCompare(b.maker);
      },
    },
    {
      title: "OS",
      dataIndex: "os",
      key: "os",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      defaultSortOrder: "ascend",
      sorter: (a, b) => {
        const priceA = a.price === "Free" ? 0 : +a.price.replace("$", "");
        const priceB = b.price === "Free" ? 0 : +b.price.replace("$", "");

        return priceA - priceB;
      },
    },
    {
      title: "Website",
      dataIndex: "website",
      key: "website",
      render: (text) => (
        <OutboundLink href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </OutboundLink>
      ),
    },
  ];

  const changeViewMode = (mode) => {
    setState({ ...state, viewmode: mode });
    localStorage.setItem("viewmode", mode);
  };

  return (
    <div className="container">
      <Row gutter={[16, 16]} align="middle">
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
        <Col xs={24} xl={{ span: 6, offset: 1 }} xxl={{ span: 6, offset: 1 }}>
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
      <Row gutter={[16, 16]} align="bottom">
        <Col xs={12}>
          {activeFiltering ? filteredData.length : postList.length} out of{" "}
          {postList.length} DAWs
        </Col>
        <Col xs={12} style={{ textAlign: "right" }}>
          <Button.Group>
            <Button
              onClick={() => changeViewMode("list")}
              icon={<UnorderedListOutlined />}
              {...(viewmode === "list" ? { type: "primary" } : {})}
            />
            <Button
              onClick={() => changeViewMode("card")}
              icon={<LayoutOutlined />}
              {...(viewmode === "card" ? { type: "primary" } : {})}
            />
          </Button.Group>
        </Col>
      </Row>
      <Row gutter={[16, 32]}>
        {viewmode === "list" ? (
          <Col xs={24}>
            <Table
              dataSource={mapThis}
              columns={columns}
              pagination={false}
              bordered
              style={{ width: "100%" }}
            />
          </Col>
        ) : (
          <>
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
                            <span style={{ color: "grey" }}>
                              by {post.maker}
                            </span>

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
          )}
        </Col>
      </Row>
    </div>
  );
};

export default DawCard;
