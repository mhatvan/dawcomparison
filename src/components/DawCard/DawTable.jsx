import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-gtag";
import React from "react";
import { Table } from "antd";
import { joinByColon } from "../../helpers/utils";

export const DawTable = ({ posts }) => {
  const tableData = posts.map((post) => {
    return {
      key: post.path,
      title: `${post.title} ${post.version}`,
      maker: post.maker,
      price: post.price,
      genre: post.genre,
      useCase: joinByColon(post.useCase),
      os: joinByColon(post.os),
      plugin: joinByColon(post.plugin),
      interface: joinByColon(post.interface),
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
      render: (text, record) => {
        return <Link to={record.key}>{text}</Link>;
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
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Use Case",
      dataIndex: "useCase",
      key: "useCase",
    },
    {
      title: "OS",
      dataIndex: "os",
      key: "os",
    },
    {
      title: "Plugin",
      dataIndex: "plugin",
      key: "plugin",
    },
    {
      title: "Interface",
      dataIndex: "interface",
      key: "interface",
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

  return (
    <Table
      dataSource={tableData}
      columns={columns}
      pagination={false}
      bordered
      style={{ width: "100%", overflowX: "auto" }}
    />
  );
};
