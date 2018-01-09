import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data
  return (
    <article className="home_page">
      <Helmet title={post.frontmatter.title} />

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
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </section>
    </article>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
