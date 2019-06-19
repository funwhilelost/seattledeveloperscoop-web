import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  const { siteMetadata: { title }} = data.site

  return (
    <article className="home_page">
      <Helmet
        title={`${title} - Blog`}
      />

      <section className="hero">
        <figure>
          {/* <img src="https://unsplash.it/1600/900?image=830" alt="" /> */}
          <div className="gradient" />
          <figcaption>
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >
                Seattle<br />
                Developer&apos;s<br />
                Co-op
              </Link>
            </h1>
            {/* <p>Real, sustainable web</p> */}
          </figcaption>
          <div className="scanlines" />
        </figure>
      </section>

      <section className="content">
        <div className="blog-posts">
          {posts
            .filter(post => post.node.frontmatter.title.length > 0)
            .map(({ node: post }) => {
              return (
                <div className="blog-post-preview" key={post.id}>
                  <h1>
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                  </h1>
                  <h2>{post.frontmatter.date}</h2>
                  <p>{post.excerpt}</p>
                </div>
              );
            })}
        </div>
      </section>
    </article>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`
