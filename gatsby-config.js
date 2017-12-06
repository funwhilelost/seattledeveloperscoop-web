// https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/
// https://www.gatsbyjs.org/packages/gatsby-image/
// https://www.gatsbyjs.org/packages/gatsby-link/

// see https://www.gatsbyjs.org/docs/plugins/

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-110763806-1',
        anonymize: true,
      },
    },
  ],
}
