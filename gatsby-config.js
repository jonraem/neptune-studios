/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  pathPrefix: '/neptune-studios',
  siteMetadata: {
    title: 'Neptune Studios',
    linkedIn: 'https://www.linkedin.com/in/pnousiainen',
    behance: 'https://www.behance.net/pnousiainen',
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'y1kfod43j6ea',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`, `png`, `jpg`],
          placeholder: `none`,
          breakpoints: [480, 992, 1025],
          backgroundColor: `transparent`,
          tracedSVGOptions: {},
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    `gatsby-transformer-sharp`,
    'gatsby-plugin-svgr',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Neptune Studios',
        short_name: 'Neptune Studios',
        start_url: '/',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
  ],
};
