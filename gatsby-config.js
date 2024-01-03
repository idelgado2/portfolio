/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Isaac Delgado",
    description: "Isaac Delgado has a cold while building this thing.",
    siteUrl: "https://workofisaac.com",
    image: "/duck.png", // Path to your image you placed in the 'static' folder
  },
  pathPrefix: "/portfolio",
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
