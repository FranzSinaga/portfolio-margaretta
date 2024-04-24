import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Margaretta Portfolio's`,
    siteUrl: `https://www.yourdomain.tld`,
    description:
      "Experience the quality and precision of a seasoned Technical Writer and Quality Assurance specialist. Explore the portfolio where meticulous writing meets rigorous quality control, showcasing a commitment to excellence and attention to detail in every project.",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Margaretta Portfolio's`,
        short_name: `Margaretta`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#483285`,
        display: `standalone`,
        icon: `src/images/logo_etha.png`,
      },
    },
  ],
};

export default config;
