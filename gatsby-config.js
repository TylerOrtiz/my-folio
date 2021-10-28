module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Tyler Portfolio",
    github: {
      url: "https://github.com/TylerOrtiz"
    },
    linkedin: {
      url: "https://www.linkedin.com/in/tylerortiz89/"
    }
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`
  ],
};
