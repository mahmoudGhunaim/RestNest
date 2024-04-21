import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import "../components/style/BLOG.css";
import Seo from '../components/seo';
import * as contentful from 'contentful';

// Initialize Contentful client with your space ID and access token
const client = contentful.createClient({
    space: 'bg3l6jyru8bh',
    accessToken: 'gY5iE1Ys195GesNcsmZwUsM93PxHvgbcNirqtx120Co'
});

const BlogList = () => {
    const [posts, setPosts] = useState([]);

    // Fetch data from Contentful on component mount
    useEffect(() => {
        client.getEntries({
            content_type: 'blogPost'  // Update 'content_type' with your Contentful content type ID
        }).then((response) => {
            setPosts(response.items);  // Assuming the structure of the response fits this setup
        }).catch(console.error);
    }, []);

    return (
        <Layout>
            <Seo
                title="Luxury Travel Insights & Tips | RestNest Blog"
                description="Dive into the RestNest blog for the latest luxury travel tips, destination insights, and property highlights in British Columbia. Elevate your vacation experience with our curated content."
            />
            <section className='hero-sec-Management hero-sec-blog'>
                <div className='hero-container-Management'>
                    <div className='hero-content-Management hero-content-blog'>
                        <h1>Blog</h1>
                        <p>Embark on an unforgettable journey through British Columbia with our insider recommendations on dining, events, and activities in Kelowna, Whistler, and Vancouver, plus exclusive travel tips for a luxury-filled escape.</p>
                    </div>
                </div>
            </section>
            <section className='blog-des-sec'>
                <div className='blog-des-container'>
                    <div className='blog-des-content'>
                        <h1>Explore the Best of British Columbia.</h1>
                        <div className='gold-line'></div>
                        <p>From the vineyard-dotted landscapes of Kelowna to the snow-capped peaks of Whistler and the urban sophistication of Vancouver, British Columbia is a tapestry of vibrant cities and raw natural beauty. Whether you're indulging in a lakeside retreat, a mountain adventure, or a city exploration, you've landed on the perfect resource. Dive in for the freshest insights on maximizing your British Columbia escapades.</p>
                    </div>
                </div>
            </section>
            <div className="blog-list-area">
                <div className="blog-list-body">
                    <div className="blog-posts-list">
                        {posts.map((post, index) => {
                            const image = post.fields.image.fields.file.url;
                            const title = post.fields.title;
                            const slug = post.fields.slug;
                            if (index === 0) {
                                return (
                                    <div key={slug} className="blog-post">
                                        <div className="blog-post-info" style={{ backgroundImage: `url(${image})` }}>
                                            <h2>{title}</h2>
                                            <Link to={`../blogpost/${slug}`} className="blog-post-link">
                                                <button>Read More</button>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                        <div className='other-posts-sec'>
                        {posts.map((post, index) => {
                            const image = post.fields.image.fields.file.url;
                            const title = post.fields.title;
                            const slug = post.fields.slug;
                            if (index > 0) {
                                return (
                                    <div key={slug} className="other-posts-container">
                                        <article>
                                            <div className="blog-post-info-loop">
                                                <img src={image} alt={title} />
                                                <div className='blog-post-info-loop-content'>
                                                    <h2>{title}</h2>
                                                    <Link to={`../blogpost/${slug}`} className="blog-post-link">
                                                        <button>Read More</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                );
                            }
                        })}
                    </div>
                    </div>
                    
                </div>
            </div>
        </Layout>
    );
};

export default BlogList;
