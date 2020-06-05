module.exports = {
  siteMetadata: {
    title: `Vessel Health`,
    description: `Meet Vessel, the in-home wellness tracker that instantly and accurately uncovers what your body really needs.`,
    author: `Vessel`,
    image: `src/images/vessel-index-og.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `orjz7lujxjmx`,
        accessToken: `vB1TSw_7LyuBpK82qM94V7mYzXBG2iRHhuRmBbQc3bE`,
        host: `preview.contentful.com`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/vessel-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
