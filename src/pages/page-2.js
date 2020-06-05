import React, { Component} from "react"
import { StaticQuery, Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

class BlogPosts extends React.Component {
  render() {
    return(
      <>
      <StaticQuery
      query={graphql`
      query BlogPostsPageQuery {
        allContentfulBlogPost(limit: 1000) {
          edges {
            node {
              id
              title
              slug
              body {
                body
              }
              tags
            }
          }
        }
      }
      `}
      render={data => (
        <>
      <SEO title="Blog posts" />
            <h1>Here's a list of all blogposts!</h1>
      <div className="test">
        {data.allContentfulBlogPost.edges.map(({ node: post }) => (
          <div key={post.id}>
            <Link to={`/blogpost/${post.slug}`}>{post.title}</Link>
          </div>
        ))}
        <span className="mgBtm__24" />
        <Link to="/">Go back to the homepage</Link>
      </div>
      </>
      )}
    />
      </>
    )
  }
}

export default BlogPosts;