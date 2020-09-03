/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const dotenv = require('dotenv');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

module.exports = {
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
    'gatsby-plugin-svgr',
    '@contentful/gatsby-transformer-contentful-richtext',
  ],
};
