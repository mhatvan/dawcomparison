import React, { Component } from "react";
import { Typography } from "antd";

class Imprint extends Component {
  render() {
    return (
      <div className="container">
        <Typography.Title>Imprint</Typography.Title>

        <Typography.Title level={2}>Owner</Typography.Title>

        <Typography.Paragraph>
          Markus Hatvan <br />
          Rüdigergasse 25 <br />
          1050 Vienna, Austria
        </Typography.Paragraph>

        <Typography.Title level={2}>Contact</Typography.Title>

        <Typography.Paragraph>
          <a href="markus_hatvan@aon.at">markus_hatvan@aon.at</a>{" "}
        </Typography.Paragraph>
      </div>
    );
  }
}

export default Imprint;
