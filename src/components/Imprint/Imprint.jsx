import React, { Component } from "react";
import { Typography } from "antd";

class Imprint extends Component {
  render() {
    return (
      <div className="container">
        <Typography.Title>Imprint</Typography.Title>
        <Typography.Paragraph>
          Duty to inform according to §5 E-Commerce Law, §14 Company Code, §63
          Trade Code and disclosure duty according to §25 of Austrian Media Law
        </Typography.Paragraph>
        <Typography.Title level={2}>Contact</Typography.Title>
        <Typography.Paragraph>
          Full name: Markus Hatvan <br />
          Address: Rüdigergasse 25, 1050 Vienna, Austria <br />
          Email: <a href="mailto:markus_hatvan@aon.at">markus_hatvan@aon.at</a>
        </Typography.Paragraph>
        <Typography.Title level={2}>EU Dispute Resolution</Typography.Title>
        <Typography.Paragraph>
          In accordance with the Ordinance on Online Dispute Resolution in
          Consumer Matters (ODR Ordinance), we would like to inform you about
          the Online Dispute Resolution Platform (OS Platform). Consumers have
          the possibility to submit complaints to the Online Dispute Resolution
          Platform of the European Commission at{" "}
          <a
            href="http://ec.europa.eu/odr"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://ec.europa.eu/odr
          </a>
          . However, we would like to point out that we are not willing or
          obliged to participate in dispute resolution proceedings before a
          consumer dispute resolution body.
        </Typography.Paragraph>
        <Typography.Title level={2}>
          Liability for the contents of this website
        </Typography.Title>
        <Typography.Paragraph>
          We are constantly developing the contents of this website and make
          every effort to provide correct and up-to-date information.
          Unfortunately, we cannot accept any liability for the accuracy of any
          content on this website, especially those provided by third parties.
          Should you notice problematic or illegal content, please contact us
          immediately, you will find the contact details in the imprint.
        </Typography.Paragraph>
        <Typography.Title level={2}>
          Liability for links on this website
        </Typography.Title>
        <Typography.Paragraph>
          Our website contains links to other websites for whose content we are
          not responsible. According to § 17 ECG, we are not liable for linked
          websites, because we had and have no knowledge of illegal activities,
          we have not noticed any such illegality and we would remove links
          immediately if we became aware of any illegality. If you notice
          illegal links on our website, please contact us, you will find the
          contact details in the imprint.
        </Typography.Paragraph>
        <Typography.Title level={2}>Copyright notice</Typography.Title>
        <Typography.Paragraph>
          All contents of this website (pictures, photos, texts, videos) are
          subject to copyright. DAWComparison uses media materials from various
          sources and does not claim ownership for any of them. Any and all
          brands (and their logos) named or displayed on this website belong to
          their owners. If you find any content on this website that you find
          offensive, please contact us.
        </Typography.Paragraph>
        <Typography.Title level={2}>Privacy policy</Typography.Title>
        Information on data protection can be found on our{" "}
        <a href="/privacy-policy">Privacy Policy</a> page.
      </div>
    );
  }
}

export default Imprint;
