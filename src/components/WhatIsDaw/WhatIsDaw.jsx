import React, { Component } from "react";
import { Typography } from "antd";
import Image from "../Image";

class WhatIsDaw extends Component {
  render() {
    const dawSetupStyle = {
      maxWidth: 400,
      margin: "20px auto",
      display: "block",
    };

    return (
      <div className="container">
        <Typography.Title>What is a DAW?</Typography.Title>

        <Typography.Paragraph>
          A DAW, short for digital audio workstation, is a music production
          software that is best used for recording, editing and producing audio
          tracks.
        </Typography.Paragraph>

        <Typography.Paragraph>
          The usual interface consists of a track layout that enables you to
          work on different instruments per lane and a separate window for
          adding plugins and mixing the volume, pan and other parameters of
          these lanes.
        </Typography.Paragraph>

        <Typography.Paragraph>
          You can further extend the power of your DAW with audio plug-ins from
          3rd parties which can range from virtual instrument emulations to
          effect plugins.
        </Typography.Paragraph>

        <Typography.Paragraph>
          The first DAW was created in the 1970s, so the various products
          developed a lot since then and technology had to come a long way until
          products were affordable not only to premium sound studios, but also
          low-end consumers nowadays.
        </Typography.Paragraph>

        <figure style={dawSetupStyle}>
          <Image
            src={"/images/daw-setup.jpg"}
            alt="DAW Setup"
            style={{ maxWidth: 400, width: "100%" }}
          />
          <Typography.Text type="secondary" style={{ margin: "10px 0" }}>
            Photo by Dmitry Novozhilov on Unsplash
          </Typography.Text>
        </figure>

        <Typography.Paragraph>
          In the picture above, you can see a classic DAW setup for a home
          studio including professional speakers, headphones, a MIDI keyboard
          and a volume knob for controlling the sound output. I would estimate
          the costs of the equipment to be about $1000.
        </Typography.Paragraph>

        <Typography.Paragraph>
          When you want to start out with music producing, you need to know that
          there will be some upfront investments necessary for the gear, since
          default laptop audio speakers don't produce audio frequencies across
          the whole spectrum.
        </Typography.Paragraph>

        <Typography.Paragraph>
          Have fun browsing the website and contact me if it inspired you to
          start with producing your own music!
        </Typography.Paragraph>
      </div>
    );
  }
}

export default WhatIsDaw;
