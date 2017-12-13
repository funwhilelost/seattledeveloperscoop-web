import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div className="home_page">
    <div className="hero">
      <figure>
        <img src="https://unsplash.it/1600/900?image=830" alt="" />
        <figcaption>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >
              Seattle Developer&apos;s Co-op
            </Link>
          </h1>
          <p>Real, sustainable software</p>
        </figcaption>
      </figure>
    </div>

    <div
      style={{
        margin: '0 auto',
        maxWidth: 780,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <h2>What we do</h2>
      <p>A collective of web developers empowering people with technology.  We
      don&apos;t seek unicorns, we <a href="https://medium.com/@sexandstartups/zebrasfix-c467e55f9d96">
      build zebras</a>.  We care about sustainable work for everyone and
      favor cooperation over competition.</p>

      <p>We believe in worker-ownership and democracy at work.</p>

      {/* <Link to="/page-2/">Go to page 2</Link> */}

      <h2>Who we are</h2>
      <p>Alex</p>
      <p>Andy</p>
      <p>Morgen</p>

      {/*
      <h2>Seven Cooperative Principles</h2>
      <ul>
        <li>Open &amp; Voluntary Membership</li>
        <li>Democratic Member Control</li>
        <li>Member&apos;s Economic Participation</li>
        <li>Autonomy &amp; Independence</li>
        <li>Education, Training, and Information</li>
        <li>Cooperation Among Cooperatives</li>
        <li>Concern for Community</li>
      </ul>
      */}
    </div>
  </div>
)

export default IndexPage
