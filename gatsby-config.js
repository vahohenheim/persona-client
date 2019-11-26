module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `a website for show my works and my skills`,
    author: `valentinbourreau`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `valentinbourreau`,
        short_name: `valentinbourreau`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}