module.exports = {
  siteMetadata: {
    siteUrl: "https://tyler-ortiz.com",
    title: "Tyler Ortiz",
    social: {
      github: "https://github.com/TylerOrtiz",
      linkedin: "https://www.linkedin.com/in/tylerortiz89/"
    },
    resume: "/TylerOrtiz-Resume.pdf"
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`
  ],
};
