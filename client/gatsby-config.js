module.exports = {
    plugins: [
        'gatsby-plugin-sass',
        {
          resolve: `gatsby-plugin-typescript`,
          options: {
            isTSX: true,
            allExtensions: true,
          },
        },
        `gatsby-plugin-catch-links`,
        `gatsby-plugin-offline`,
    ]
}