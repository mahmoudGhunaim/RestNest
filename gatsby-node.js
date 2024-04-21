const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  const result = await graphql(`
  query {
    allContentfulBlogPost {
      edges {
        node {
          content {
            raw
          }
          image {
            url
          }
          slug
          title
        }
      }
    }
  }
  `);

  // Check for errors or null result
  if (result.errors || !result.data.allContentfulBlogPost) {
    console.error("Error retrieving contentful data", result.errors);
    return;
  }

  // Create blog post pages
  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    createPage({
      path: `blogpost/${node.slug}/`,
      component: path.resolve('./src/templates/blogpost.js'),
      context: {
        slug: node.slug,
      },
    });
  });
};