import React, { Component } from "react";
import { Typography, Button, message, Space } from "antd";
import "./PrivacyPolicy.css";

const handleGaOptOut = () => {
  try {
    if (typeof window !== `undefined`) {
      window.gaOptout();
      message.success("Successfully deactivated Google Analytics!");
    }
  } catch (error) {
    message.error("Deactivating Google Analytics failed");
  }
};

class PrivacyPolicy extends Component {
  render() {
    return (
      <div className="container">
        <Typography.Title>Privacy Policy</Typography.Title>
        <Typography.Paragraph>
          We have drawn up this data protection declaration to explain to you,
          in accordance with the provisions of the EU data protection basic
          regulation, what information we collect, how we use data and what
          decision-making options you have as a visitor to this website.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Unfortunately, it is in the nature of things that these explanations
          sound very technical, but we have tried to describe the most important
          things as simply and clearly as possible.
        </Typography.Paragraph>
        <Typography.Title level={2}>Automatic data storage</Typography.Title>
        <Typography.Paragraph>
          When you visit websites today, certain information is automatically
          created and stored, including on this website. When you visit our
          website as you are doing right now, our web server (the computer on
          which this website is stored) automatically saves data such as:
        </Typography.Paragraph>
        <ul>
          <li>the address (URL) of the accessed web page</li>
          <li>Browser and browser version</li>
          <li>the operating system used</li>
          <li>
            the address (URL) of the previously visited page (referrer URL)
          </li>
          <li>
            the host name and IP address of the device from which access is made
          </li>
          <li>Date and time</li>
        </ul>
        <Typography.Paragraph>
          Usually web server log files are stored for two weeks and then
          automatically deleted. We do not pass on this data, but cannot exclude
          the possibility that this data may be viewed in the event of illegal
          behaviour.
        </Typography.Paragraph>
        <Typography.Title level={2}>Storage of personal data</Typography.Title>
        <Typography.Paragraph>
          Personal information that you submit to us electronically on this
          website, such as your name, e-mail address, postal address or other
          personal information when submitting a form or comments on the blog,
          together with the time and IP address, will only be used by us for the
          purpose stated in each case, will be kept securely stored and will not
          be disclosed to third parties.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Thus, we will only use your personal data for communication with those
          visitors who expressly request contact and for processing the services
          and products offered on this website. We will not pass on your
          personal data without your consent, but we cannot exclude the
          possibility that this data may be viewed in the event of unlawful
          behaviour.
        </Typography.Paragraph>
        <Typography.Paragraph>
          If you send us personal data by e-mail - thus off this website - we
          cannot guarantee secure transmission and the protection of your data.
          We recommend that you never send confidential data by e-mail without
          encryption.
        </Typography.Paragraph>

        <Typography.Title level={2}>
          Rights according to the data protection basic regulation
        </Typography.Title>

        <Typography.Paragraph>
          In accordance with the provisions of the DSGVO and the Austrian Data
          Protection Act (DSG), you are basically entitled to the following
          rights:
        </Typography.Paragraph>

        <ul>
          <li>Right of rectification (Article 16 DSGVO)</li>
          <li>
            Right of cancellation ("right to be forgotten") (Article 17 DPA)
          </li>
          <li>Right to restrict processing (Article 18 DSGVO)</li>
          <li>
            Right of notification - Obligation to notify in connection with the
            correction or deletion of personal data or the restriction of
            processing (Article 19 DPA)
          </li>
          <li>Right to data transferability (Article 20 DSGVO)</li>
          <li>Right of objection (Article 21 DSGVO)</li>
          <li>
            Right not to be subject to a decision based solely on automated
            processing, including profiling (Article 22 DPA)
          </li>
        </ul>

        <Typography.Paragraph>
          If you believe that the processing of your data violates data
          protection law or your data protection rights have otherwise been
          violated in any way, you can complain to the supervisory authority,
          which in Austria is the data protection authority, whose website you
          can find at{" "}
          <a
            href="https://www.dsb.gv.at/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.dsb.gv.at/
          </a>
          .
        </Typography.Paragraph>

        <Typography.Title level={2}>TLS encryption with https</Typography.Title>

        <Typography.Paragraph>
          We use https to transfer data tap-proof on the Internet. By using TLS
          (Transport Layer Security), an encryption protocol for secure data
          transmission on the Internet, we can ensure the protection of
          confidential data. You can recognize the use of this data transmission
          security by the small lock symbol in the upper left corner of your
          browser and the use of the https scheme as part of our Internet
          address.
        </Typography.Paragraph>

        <Typography.Title level={2}>Cookies</Typography.Title>

        <Typography.Paragraph>
          Our website uses HTTP cookies to store user-specific data. A cookie is
          a short data package which is exchanged between the web browser and
          the web server, but is completely meaningless to the latter and only
          acquires meaning for the web application, e.g. an online shop, such as
          the contents of a virtual shopping basket.
        </Typography.Paragraph>

        <Typography.Paragraph>
          There are two types of cookies: first-party cookies are created by our
          website, third-party cookies are created by other websites (e.g.
          Google Analytics). There are three categories of cookies: essential
          cookies to ensure basic site functionality, functional cookies to
          ensure site performance, and targeted cookies to improve the user
          experience.
        </Typography.Paragraph>

        <Typography.Paragraph>
          We use cookies to make our website more user-friendly. Some cookies
          remain stored on your terminal device until you delete them. They
          enable us to recognise your browser the next time you visit our
          website.
        </Typography.Paragraph>

        <Typography.Paragraph>
          If you do not wish to do so, you can set up your browser to inform you
          when cookies are set and to allow this only in individual cases. You
          can delete cookies that are already on your computer or deactivate
          cookies at any time. The procedure for doing this varies from browser
          to browser, but the best way to do this is to look up the instructions
          in Google using the search term "Delete Chrome cookies" or "Disable
          Chrome cookies" in the case of a Chrome browser, or replace the word
          "Chrome" with the name of your browser, e.g. Edge, Firefox, Safari. If
          you do not generally allow us to use cookies, i.e. disable them in
          your browser settings, some functions and pages may not work as
          expected.
        </Typography.Paragraph>

        <Typography.Title level={2}>
          Google Fonts Privacy Policy
        </Typography.Title>

        <Typography.Paragraph>
          We use Google Fonts from the company Google Inc. (1600 Amphitheatre
          Parkway Mountain View, CA 94043, USA) on our website. Google Fonts is
          used without authentication and no cookies are sent to the Google
          Fonts API. If you have an account with Google, none of your Google
          Account information is submitted to Google while using Google Fonts.
          Google only records your use of CSS and the fonts you use and stores
          this information securely. You can find more information about these
          and other questions at{" "}
          <a
            href="https://developers.google.com/fonts/faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://developers.google.com/fonts/faq
          </a>
          .
        </Typography.Paragraph>
        <Typography.Paragraph>
          You can find out what information Google collects and how that
          information is used at{" "}
          <a
            href="https://www.google.com/intl/de/policies/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.google.com/intl/de/policies/privacy/
          </a>
          .
        </Typography.Paragraph>

        <Typography.Title level={2}>
          Google Analytics Privacy Policy
        </Typography.Title>

        <Typography.Paragraph>
          On this website we use Google Analytics of the company Google Inc.
          (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) to
          statistically evaluate visitor data. Google Analytics uses
          target-oriented cookies for this purpose.
        </Typography.Paragraph>

        <Typography.Title level={2}>
          Cookies from Google Analytics
        </Typography.Title>

        <ul>
          <li>
            _ga
            <ul>
              <li>Expiry period: 2 years</li>
              <li>Usage: Differentiation of website visitors</li>
              <li>Example value: GA1.2.1326744211.15211078738</li>
            </ul>
          </li>
          <li>
            _gid
            <ul>
              <li>Expiration time: 24 hours </li>
              <li>Usage: Differentiation of website visitors</li>{" "}
              <li>Example value: GA1.2.1687193234.15211078738</li>
            </ul>
          </li>
          <li>
            _gat_gtag_UA_&lt;property - id&gt;
            <ul>
              <li>Sequence time: 1 minute</li>
              <li>
                Usage: Used to throttle the request rate. If Google Analytics is
                provided via the Google Tag Manager, this cookie is named
                _dc_gtm_ &lt;property - id&gt;.
              </li>
              <li>Example value: 1</li>
            </ul>
          </li>
        </ul>

        <Typography.Paragraph>
          For more information on terms of use and privacy, please visit{" "}
          <a
            href="http://www.google.com/analytics/terms/de.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            http://www.google.com/analytics/terms/de.html
          </a>{" "}
          or{" "}
          <a
            href="https://support.google.com/analytics/answer/6004245?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://support.google.com/analytics/answer/6004245?hl=de
          </a>
          .
        </Typography.Paragraph>

        <Typography.Title level={2}>Pseudonymization</Typography.Title>

        <Typography.Paragraph>
          Our concern in terms of the DSGVO is the improvement of our offer and
          our web presence. Since the privacy of our users is important to us,
          the user data is pseudonymised. The data processing is based on the
          legal provisions of § 96 para. 3 TKG and Art 6 EU-DSGVO para. 1 lit a
          (consent) and/or f (legitimate interest) of the DSGVO.
        </Typography.Paragraph>

        <Typography.Title level={2}>
          Deactivation of data collection by Google Analytics
        </Typography.Title>

        <Typography.Paragraph>
          Using the browser add-on to disable Google Analytics JavaScript
          (ga.js, analytics.js, dc.js), website visitors can prevent Google
          Analytics from using their data.
        </Typography.Paragraph>

        <Typography.Paragraph>
          You can prevent the collection of data generated by the cookie and
          related to your use of the website to Google and the processing of
          this data by Google by downloading and installing the browser plug-in
          available at the following link:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://tools.google.com/dlpage/gaoptout?hl=de
          </a>
        </Typography.Paragraph>

        <Typography.Title level={2}>
          Google Analytics deactivation link
        </Typography.Title>

        <Typography.Paragraph>
          If you click on the following deactivation link, you can prevent
          Google from recording further visits to this website.
        </Typography.Paragraph>

        <Typography.Paragraph>
          Attention: Deleting cookies, using the incognito/private mode of your
          browser, or using another browser will result in data being collected
          again.
        </Typography.Paragraph>
        <Button type="primary" onClick={handleGaOptOut}>
          Deactivate Google Analytics
        </Button>
        <br />
        <br />
        <br />

        <Typography.Title level={2}>YouTube Privacy Policy</Typography.Title>

        <Typography.Paragraph>
          We use YouTube on this page of the video service, the company YouTube,
          LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.
        </Typography.Paragraph>

        <Typography.Paragraph>
          By calling up pages on our website that have integrated YouTube
          videos, data is transferred to YouTube, stored and evaluated. If you
          have a YouTube account and are logged in, this data is associated with
          your personal account and the data stored in it.
        </Typography.Paragraph>

        <Typography.Paragraph>
          You can find out which data is collected by Google and what this data
          is used for at{" "}
          <a
            href="https://www.google.com/intl/de/policies/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.google.com/intl/de/policies/privacy/
          </a>
          .
        </Typography.Paragraph>

        <Typography.Title level={2}>
          Google AdSense Privacy Policy
        </Typography.Title>

        <Typography.Paragraph>
          We use on this website Google AdSense, the advertising program of the
          company Google Inc. (1600 Amphitheatre Parkway Mountain View, CA
          94043, USA).
        </Typography.Paragraph>

        <Typography.Paragraph>
          In the process, data on the displayed advertising material and your IP
          address may be transmitted to servers in the USA and evaluated there.
        </Typography.Paragraph>

        <Typography.Paragraph>
          In AdSense, cookies are intended to enable better advertising, the
          cookies do not contain personalized data. Google AdSense sends a
          cookie to the browser after every impression, every click and every
          other activity that leads to a call of the Google Adsense servers. If
          the browser accepts the cookie, it is stored there.
        </Typography.Paragraph>

        <Typography.Paragraph>
          Third parties may place and read cookies in your browser or use web
          beacons to store data obtained from the ads served on the website. Web
          beacons are small graphics that enable log file recording and log file
          analysis that are used for online marketing statistical analysis.
        </Typography.Paragraph>

        <Typography.Title level={2}> Disqus Privacy Policy</Typography.Title>

        <Typography.Paragraph>
          We use "Disqus" for our comment function, a plug-in from Disqus, Inc.
          301 Howard St, Suite 300, San Francisco, CA 94105, USA (hereinafter
          referred to as: "Disqus"). Disqus allows you to comment on our
          contributions. This comment will be stored and displayed as long as
          the commented contribution is publicly available on our website,
          unless you delete the comment before. The use of this comment function
          is available to you as a guest without prior registration as well as
          if you have a user account with Disqus and have logged in with it.
          Furthermore you can log in with an existing user account at a third
          party provider (e.g. Google, Facebook, Twitter, etc.). If you register
          via a third party provider, this provider will also process your
          personal data.
        </Typography.Paragraph>
        <Typography.Paragraph>
          Disqus provides us with the data collected through the comment
          function. This is also our legitimate interest in the processing of
          the above data by the third party provider. The legal basis is Art. 6
          para. 1 sentence 1 lit. f) DSGVO.
        </Typography.Paragraph>
        <Typography.Paragraph>
          In order to oblige Disqus to process the transmitted data only in
          accordance with our instructions and to comply with the applicable
          data protection regulations, we have concluded an order processing
          contract with Disqus. In addition, Disqus has joined the Privacy
          Shield Agreement concluded between the European Union and the USA,
          thereby assuring that the data protection standards required by the
          European Union are sufficiently observed and complied with. The
          certification of Disqus can be viewed under the following link:
          <a
            href="https://www.privacyshield.gov/participant?id=a2zt0000000TRkEAAW&status=Active"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            https://www.privacyshield.gov/participant?id=a2zt0000000TRkEAAW&status=Active
          </a>
        </Typography.Paragraph>
        <Typography.Paragraph>
          However, users may object to the processing of their data for the
          purpose of displaying advertisements:{" "}
          <a
            href="https://disqus.com/data-sharing-settings"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://disqus.com/data-sharing-settings
          </a>
          .
        </Typography.Paragraph>

        <Typography.Paragraph>
          The contact details of the person in charge are as follows Disqus,
          Inc. 301 Howard St, Suite 300, San Francisco, CA 94105, USA. Further
          information on the processing of your data and data protection can be
          found on the following Disqus websites:
        </Typography.Paragraph>
        <ul>
          <li>
            Terms of use:{" "}
            <a
              href="https://help.disqus.com/customer/portal/articles/466260-terms-of-service"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://help.disqus.com/customer/portal/articles/466260-terms-of-service
            </a>
          </li>
          <li>
            Privacy policy:{" "}
            <a
              href="https://help.disqus.com/customer/portal/articles/466259-privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://help.disqus.com/customer/portal/articles/466259-privacy-policy
            </a>
          </li>
        </ul>

        <br />

        <Typography.Title level={2}>Disable cookies</Typography.Title>

        <Typography.Paragraph>
          You can delete cookies that are already on your computer or deactivate
          cookies at any time. The procedure for doing this varies by browser,
          but the best way to do this is to look up the instructions in Google
          using the search term "delete cookies chrome" or "disable cookies
          chrome" in the case of a chrome browser, or replace the word "chrome"
          with the name of your browser, e.g. edge, firefox, safari.
        </Typography.Paragraph>

        <Typography.Paragraph>
          If you do not generally allow us to use cookies, i.e. disable them in
          your browser settings, some functions and pages may not work as
          expected.
        </Typography.Paragraph>

        <Typography.Title level={2}>
          Disable personalized advertising
        </Typography.Title>

        <Typography.Paragraph>
          If you have a Google Account, you can disable personalized advertising
          on{" "}
          <a
            href="https://adssettings.google.com/authenticated"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://adssettings.google.com/authenticated
          </a>
          . Even if you disable personalized ads, you may still see ads based on
          factors such as your approximate location derived from your IP
          address, browser type, and recently used search terms.
        </Typography.Paragraph>

        <Typography.Paragraph>
          You can find out what information Google collects and how this
          information is used at{" "}
          <a
            href="https://www.google.com/intl/de/policies/privacy/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.google.com/intl/de/policies/privacy/
          </a>
          .
        </Typography.Paragraph>
      </div>
    );
  }
}

export default PrivacyPolicy;
