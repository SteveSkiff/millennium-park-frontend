require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Millennium Park`,
    description: `Visit Chicago's Millenium Park and experience one of the recreational lifebloods of downtown.`,
    author: `Chicago Park District`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `millennium-park`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({node, key, value}) => article => `/${article.uid}`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/mplogo600(White).png`, // This path is relative to the root of the site.
      },
    },
  ],
}
