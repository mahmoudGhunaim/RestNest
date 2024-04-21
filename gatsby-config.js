

const dotenv = require('dotenv')
if (process.env.NODE_ENV !== 'production'){
  dotenv.config()
}
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    compilerOptions: {
      "strict": false,
  
    },
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    {
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					formats: [`auto`, `webp`, `avif`,`png`,`jpg`], 
					quality: 100,
					placeholder: "blurred",
				},
			},
		}, 
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    {
      resolve:`gatsby-source-contentful`,
      options:{
        spaceId:`bg3l6jyru8bh`,
        accessToken: `gY5iE1Ys195GesNcsmZwUsM93PxHvgbcNirqtx120Co`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `RestNest`,
        short_name: `RestNest`,
        start_url: `/Home`,
        background_color: `#ffffff`,
        theme_color: `#222222`,
        display: `minimal-ui`,
        icon: `./static/Restnest.svg`, 
      },
    },
    ],
    
}
