import React, { Component } from "react";
import { Typography } from "antd";

class TermsOfService extends Component {
  render() {
    return (
      <div className="container">
        <Typography.Title>Terms of Service</Typography.Title>

        <Typography.Title level={2}>1. Terms</Typography.Title>

        <Typography.Paragraph>
          Your privacy is important to us. It is DAWComparison's policy to
          respect your privacy regarding any information we may collect from you
          across our website,{" "}
          <a href="https://dawcomparison.netlify.app/">
            https://dawcomparison.netlify.app/
          </a>
          , and other sites we own and operate.
        </Typography.Paragraph>

        <Typography.Paragraph>
          By accessing the website at{" "}
          <a href="https://dawcomparison.netlify.app/">
            https://dawcomparison.netlify.app/
          </a>
          , you are agreeing to be bound by these terms of service, all
          applicable laws and regulations, and agree that you are responsible
          for compliance with any applicable local laws. If you do not agree
          with any of these terms, you are prohibited from using or accessing
          this site. The materials contained in this website are protected by
          applicable copyright and trademark law.
        </Typography.Paragraph>
        <Typography.Title level={2}>2. Use License</Typography.Title>
        <div className="content">
          <ol type="a">
            <li>
              Permission is granted to temporarily download one copy of the
              materials (information or software) on DAWComparison's website for
              personal, non-commercial transitory viewing only. This is the
              grant of a license, not a transfer of title, and under this
              license you may not:
              <ol type="i">
                <li>modify or copy the materials;</li>
                <li>
                  use the materials for any commercial purpose, or for any
                  public display (commercial or non-commercial);
                </li>
                <li>
                  attempt to decompile or reverse engineer any software
                  contained on DAWComparison's website;
                </li>
                <li>
                  remove any copyright or other proprietary notations from the
                  materials; or
                </li>
                <li>
                  transfer the materials to another person or "mirror" the
                  materials on any other server.
                </li>
              </ol>
            </li>
            <li>
              This license shall automatically terminate if you violate any of
              these restrictions and may be terminated by DAWComparison at any
              time. Upon terminating your viewing of these materials or upon the
              termination of this license, you must destroy any downloaded
              materials in your possession whether in electronic or printed
              format.
            </li>
          </ol>
        </div>

        <Typography.Title level={2}>3. Disclaimer</Typography.Title>
        <div className="content">
          <ol type="a">
            <li>
              The materials on DAWComparison's website are provided on an 'as
              is' basis. DAWComparison makes no warranties, expressed or
              implied, and hereby disclaims and negates all other warranties
              including, without limitation, implied warranties or conditions of
              merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of
              rights.
            </li>
            <li>
              Further, DAWComparison does not warrant or make any
              representations concerning the accuracy, likely results, or
              reliability of the use of the materials on its website or
              otherwise relating to such materials or on any sites linked to
              this site.
            </li>
          </ol>
        </div>
        <Typography.Title level={2}>4. Limitations</Typography.Title>
        <Typography.Paragraph>
          In no event shall DAWComparison or its suppliers be liable for any
          damages (including, without limitation, damages for loss of data or
          profit, or due to business interruption) arising out of the use or
          inability to use the materials on DAWComparison's website, even if
          DAWComparison or a DAWComparison authorized representative has been
          notified orally or in writing of the possibility of such damage.
          Because some jurisdictions do not allow limitations on implied
          warranties, or limitations of liability for consequential or
          incidental damages, these limitations may not apply to you.
        </Typography.Paragraph>
        <Typography.Title level={2}>5. Accuracy of materials</Typography.Title>
        <Typography.Paragraph>
          The materials appearing on DAWComparison's website could include
          technical, typographical, or photographic errors. DAWComparison does
          not warrant that any of the materials on its website are accurate,
          complete or current. DAWComparison may make changes to the materials
          contained on its website at any time without notice. However
          DAWComparison does not make any commitment to update the materials.
        </Typography.Paragraph>
        <Typography.Title level={2}>6. Links</Typography.Title>
        <Typography.Paragraph>
          DAWComparison has not reviewed all of the sites linked to its website
          and is not responsible for the contents of any such linked site. The
          inclusion of any link does not imply endorsement by DAWComparison of
          the site. Use of any such linked website is at the user's own risk.
        </Typography.Paragraph>
        <Typography.Title level={2}>7. Modifications</Typography.Title>
        <Typography.Paragraph>
          DAWComparison may revise these terms of service for its website at any
          time without notice. By using this website you are agreeing to be
          bound by the then current version of these terms of service.
        </Typography.Paragraph>
        <Typography.Title level={2}>8. Governing Law</Typography.Title>
        <Typography.Paragraph>
          These terms and conditions are governed by and construed in accordance
          with the laws of Vienna, Austria and you irrevocably submit to the
          exclusive jurisdiction of the courts in that State or location.
        </Typography.Paragraph>
        <Typography.Paragraph>
          <a
            href="https://getterms.io"
            title="Generate a free terms of use document"
          >
            Terms of Use created with GetTerms.
          </a>
        </Typography.Paragraph>
      </div>
    );
  }
}

export default TermsOfService;
