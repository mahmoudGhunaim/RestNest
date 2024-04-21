import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import "../components/style/BlogPost.css"

export const query = graphql`
query($slug: String!) {
  contentfulBlogPost(slug: { eq: $slug }) {
    title
    content {
      raw
    }
    image {
      url
    }
  }
}
`;

const BlogPost = ({ data }) => {
  const renderContent = (rawContent) => {
    try {
      const contentJSON = JSON.parse(rawContent);
      return documentToReactComponents(contentJSON);
    } catch (error) {
      console.error("Failed to parse content:", error);
      return <p>Error loading content.</p>;
    }
  };

  const post = data.contentfulBlogPost;

  if (!post) {
    return <Layout>No post found</Layout>;
  }

  const image = getImage(post.image);

  return (
    <Layout>
      <article className="blog-post" key={post.title}>
        <div className="post-image-container" style={{ backgroundImage: `url(${post.image.url})` }}>
          <div className="post-date-and-title">
            <h1>{post.title}</h1>
          </div>
        </div>
        <div className='post-content-text-sec'>
          <div className="post-content-text">
            {post.content && renderContent(post.content.raw)}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
