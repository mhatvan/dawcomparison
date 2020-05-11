import React, { Component } from "react";
import { Typography, Button, message } from "antd";

const handleGaOptOut = () => {
  try {
    window.gaOptout();
    message.success("Successfully deactivated Google Analytics");
  } catch (error) {
    message.error("Deactivating Google Analytics failed");
  }
};

class PrivacyPolicy extends Component {
  render() {
    return (
      <div className="container">
        <Typography.Title>Privacy Policy for DAWComparison</Typography.Title>

        <Typography.Paragraph>
          At DAWComparison, accessible from https://dawcomparison.netlify.app/,
          one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is
          collected and recorded by DAWComparison and how we use it.
        </Typography.Paragraph>

        <Typography.Paragraph>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </Typography.Paragraph>

        <Typography.Title level={2}>
          General Data Protection Regulation (GDPR)
        </Typography.Title>
        <Typography.Paragraph>
          We are a Data Controller of your information.
        </Typography.Paragraph>

        <Typography.Paragraph>
          DAWComparison legal basis for collecting and using the personal
          information described in this Privacy Policy depends on the Personal
          Information we collect and the specific context in which we collect
          the information:
        </Typography.Paragraph>
        <div className="content">
          <ul>
            <li>DAWComparison needs to perform a contract with you</li>
            <li>You have given DAWComparison permission to do so</li>
            <li>
              Processing your personal information is in DAWComparison
              legitimate interests
            </li>
            <li>DAWComparison needs to comply with the law</li>
          </ul>
        </div>

        <Typography.Paragraph>
          DAWComparison will retain your personal information only for as long
          as is necessary for the purposes set out in this Privacy Policy. We
          will retain and use your information to the extent necessary to comply
          with our legal obligations, resolve disputes, and enforce our
          policies. Our Privacy Policy was generated with the help of{" "}
          <a href="https://www.gdprprivacynotice.com/">
            GDPR Privacy Policy Generator
          </a>{" "}
          and the{" "}
          <a href="https://www.gdprcontracts.com/gdpr-privacy-policy-generator/">
            GDPR Privacy Policy Generator
          </a>
          .
        </Typography.Paragraph>

        <Typography.Paragraph>
          If you are a resident of the European Economic Area (EEA), you have
          certain data protection rights. If you wish to be informed what
          Personal Information we hold about you and if you want it to be
          removed from our systems, please contact us.
        </Typography.Paragraph>
        <Typography.Paragraph>
          In certain circumstances, you have the following data protection
          rights:
        </Typography.Paragraph>

        <div className="content">
          <ul>
            <li>
              The right to access, update or to delete the information we have
              on you.
            </li>
            <li>The right of rectification.</li>
            <li>The right to object.</li>
            <li>The right of restriction.</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
        </div>

        <Typography.Title level={2}>Log Files</Typography.Title>

        <Typography.Paragraph>
          DAWComparison follows a standard procedure of using log files. These
          files log visitors when they visit websites. All hosting companies do
          this and a part of hosting services' analytics. The information
          collected by log files include internet protocol (IP) addresses,
          browser type, Internet Service Provider (ISP), date and time stamp,
          referring/exit pages, and possibly the number of clicks. These are not
          linked to any information that is personally identifiable. The purpose
          of the information is for analyzing trends, administering the site,
          tracking users' movement on the website, and gathering demographic
          information.
        </Typography.Paragraph>

        <Typography.Title level={2}>Cookies and Web Beacons</Typography.Title>

        <Typography.Paragraph>
          Like any other website, DAWComparison uses 'cookies'. These cookies
          are used to store information including visitors' preferences, and the
          pages on the website that the visitor accessed or visited. The
          information is used to optimize the users' experience by customizing
          our web page content based on visitors' browser type and/or other
          information.
        </Typography.Paragraph>

        <Typography.Paragraph>
          For more general information on cookies, please read{" "}
          <a href="https://www.cookieconsent.com/what-are-cookies/">
            "What Are Cookies"
          </a>
          .
        </Typography.Paragraph>

        <Typography.Title level={2}>
          Google DoubleClick DART Cookie
        </Typography.Title>

        <Typography.Paragraph>
          Google is one of a third-party vendor on our site. It also uses
          cookies, known as DART cookies, to serve ads to our site visitors
          based upon their visit to www.website.com and other sites on the
          internet. However, visitors may choose to decline the use of DART
          cookies by visiting the Google ad and content network Privacy Policy
          at the following URL –{" "}
          <a href="https://policies.google.com/technologies/ads">
            https://policies.google.com/technologies/ads
          </a>
        </Typography.Paragraph>

        <Typography.Title level={2}>Our Advertising Partners</Typography.Title>

        <Typography.Paragraph>
          Some of advertisers on our site may use cookies and web beacons. Our
          advertising partners are listed below. Each of our advertising
          partners has their own Privacy Policy for their policies on user data.
          For easier access, we hyperlinked to their Privacy Policies below.
        </Typography.Paragraph>

        <ul>
          <li>
            <Typography.Paragraph>Google</Typography.Paragraph>
            <Typography.Paragraph>
              <a href="https://policies.google.com/technologies/ads">
                https://policies.google.com/technologies/ads
              </a>
            </Typography.Paragraph>
          </li>
        </ul>

        <Typography.Title level={2}>Privacy Policies</Typography.Title>

        <Typography.Paragraph>
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of DAWComparison.
        </Typography.Paragraph>

        <Typography.Paragraph>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on DAWComparison, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit.
        </Typography.Paragraph>

        <Typography.Paragraph>
          Note that DAWComparison has no access to or control over these cookies
          that are used by third-party advertisers.
        </Typography.Paragraph>

        <Typography.Title level={2}>
          Third Party Privacy Policies
        </Typography.Title>

        <Typography.Paragraph>
          DAWComparison's Privacy Policy does not apply to other advertisers or
          websites. Thus, we are advising you to consult the respective Privacy
          Policies of these third-party ad servers for more detailed
          information. It may include their practices and instructions about how
          to opt-out of certain options.{" "}
        </Typography.Paragraph>

        <Typography.Paragraph>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers'
          respective websites.
        </Typography.Paragraph>

        <Typography.Title level={2}>Children's Information</Typography.Title>

        <Typography.Paragraph>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </Typography.Paragraph>

        <Typography.Paragraph>
          DAWComparison does not knowingly collect any Personal Identifiable
          Information from children under the age of 13. If you think that your
          child provided this kind of information on our website, we strongly
          encourage you to contact us immediately and we will do our best
          efforts to promptly remove such information from our records.
        </Typography.Paragraph>

        <Typography.Title level={2}>
          Online Privacy Policy Only
        </Typography.Title>

        <Typography.Paragraph>
          Our Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in DAWComparison. This policy is not applicable
          to any information collected offline or via channels other than this
          website.
        </Typography.Paragraph>

        <Typography.Title level={2}>Consent</Typography.Title>

        <Typography.Paragraph>
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </Typography.Paragraph>

        <Button type="primary" onClick={handleGaOptOut}>
          Deactivate Google Analytics
        </Button>
      </div>
    );
  }
}

export default PrivacyPolicy;
