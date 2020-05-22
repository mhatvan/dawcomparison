import React from "react";
import CookieConsent from "react-cookie-consent";

const CookiePrompt = () => {
  const handleAcceptCookies = () => {
    document.cookie = `gdpr-analytics-enabled=true;path=${location.pathname}`;
    window.trackGoogleAnalytics();
  };

  const hasDNTEnabled = () => {
    if (typeof window !== `undefined`) {
      if (
        window.doNotTrack ||
        navigator.doNotTrack ||
        navigator.msDoNotTrack ||
        "msTrackingProtectionEnabled" in window.external
      ) {
        // The browser supports Do Not Track!

        if (
          window.doNotTrack == "1" ||
          navigator.doNotTrack == "yes" ||
          navigator.doNotTrack == "1" ||
          navigator.msDoNotTrack == "1" ||
          window.external.msTrackingProtectionEnabled()
        ) {
          // Do Not Track is enabled!
          return true;
        }
      } else {
        // Do Not Track is not supported
        return false;
      }
    }
  };

  return (
    <>
      {!hasDNTEnabled() && (
        <CookieConsent
          buttonText="Accept"
          enableDeclineButton
          declineButtonText="Decline"
          declineCookieValue={false}
          cookieName="gdpr-analytics-enabled"
          onAccept={handleAcceptCookies}
          style={{ background: "rgba(61,65,66,0.85)", padding: 10 }}
          disableButtonStyles
          buttonClasses="ant-btn"
          // buttonStyle={{ margin: "10px 0" }}
          declineButtonStyle={{ marginRight: 10 }}
          declineButtonClasses="ant-btn"
        >
          Our website uses cookies to analyze how the site is used and to ensure
          your experience is consistent between visits.{" "}
          <a
            href="/privacy-policy"
            style={{ color: "white", textDecoration: "underline" }}
          >
            Cookies Policy
          </a>
        </CookieConsent>
      )}
    </>
  );
};

export default CookiePrompt;
