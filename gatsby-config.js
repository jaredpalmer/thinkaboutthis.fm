// gatsby-config.js

module.exports = {
  siteMetadata: {
    siteName: `Think About This Podcast`,
    siteUrl: `https://thinkaboutthis.fm`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-twitter`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://thinkaboutthis.fm`,
      },
    },

    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',

        // WebApp Manifest Configuration
        appName: null, // Inferred with your package.json
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        theme_color: '#fff',
        display: 'standalone',
        orientation: 'any',
        start_url: '/?homescreen=1',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#46FFE7`,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
    {
      // resolve: '@uptimeventures/gatsby-source-rss',
      // this is our custom fork of @uptimeventures/gatsby-source-rss
      // it extracts the embed URL out of the vanilla RSS feed.
      resolve: 'gatsby-source-megaphone-rss',
      options: {
        feed:
          'https://feeds.megaphone.fm/think-about-this-with-shelly-palmer-ross-martin',
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-autolink-headers',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1000,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-1611517-20',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/lib/typography`,
      },
    },
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-netlify`,
  ],
};
