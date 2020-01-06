const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `a website for show my works and my skills`,
    author: `valentinbourreau`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          path: path.join(__dirname, `src`, `assets`, `images`),
          name: `images`,
      },
    },
    {
        resolve: 'gatsby-plugin-root-import',
        options: {
            src: path.join(__dirname, 'src'),
            components: path.join(__dirname, 'src/components'),
            landings: path.join(__dirname, 'src/landings'),
            layouts: path.join(__dirname, 'src/layouts'),
            assets: path.join(__dirname, 'src/assets'),
            styles: path.join(__dirname, 'src/styles'),
        }
    },
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#D9BAA4",
          'link-color': '#D9BAA4',
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `valentinbourreau`,
        short_name: `valentinbourreau`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#D9BAA4`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-116673277-1", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}