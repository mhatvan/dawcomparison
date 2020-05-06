const config = {
  siteTitle: "DAW Comparison", // Site title.
  siteTitleShort: "DAW Comparison", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "DAW Comparison | Find the ideal DAW for your needs.", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://dawcomparison.netlify.app", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links.
  siteDescription:
    "Compare digital audio workstations for music production that are available on the market. We display a breakdown of the pros & cons different DAWs offer.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteRssTitle: "DAW Comparison RSS feed", // Title of the RSS feed
  googleAnalyticsID: "UA-81701707-2", // GA tracking ID.
  disqusShortname: "https-dawcomparison-netlify-app", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 0, // Amount of posts displayed per listing page.
  userName: "Markus Hatvan", // Username to display in the author segment.
  userEmail: "markus_hatvan@aon.at", // Email used for RSS feed's author segment
  userLocation: "Vienna, Austria", // User location to display in the author segment.
  copyright: `Copyright © ${new Date().getFullYear()} Markus Hatvan`, // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
