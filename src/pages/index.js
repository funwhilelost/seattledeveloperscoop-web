import React from 'react'
import Link from 'gatsby-link'

import alexImage from '../images/alex.jpg'
import andyImage from '../images/andy.jpg'
import morgenImage from '../images/morgen.jpg'

{/* https://simpleicons.org/ */}
import githubIcon from '../icons/github.svg'

const Member = ({ name, github, image }) => (
  <div className="content__member">
    <h3>{name}</h3>
    {/* https://www.gatsbyjs.org/packages/gatsby-image/ */}
    <img src={image} alt={`${name} Profile Image`} className="content__member-image" />
    <a href={github}>
      <img className="content__member-icon" src={githubIcon} />
    </a>
  </div>
)

const IndexPage = () => (
  <div className="home_page">
    <div className="hero">
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
    </div>

    <div
      style={{
        margin: '0 auto',
        maxWidth: 780,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}

      className="content"
    >
      <p>We&apos;re a collective of web developers empowering people with technology.  We
      don&apos;t seek unicorns, we <a href="https://medium.com/@sexandstartups/zebrasfix-c467e55f9d96">
      build zebras</a>.  Good, sustainable work, democracy in the workplace,
      and cooperation are our core values.</p>

      {/* <Link to="/page-2/">Go to page 2</Link> */}

      <h2>What we offer</h2>

      <aside className="content__pull-quote">
        <blockquote>
          <p>We make the web work for you.</p>
        </blockquote>
      </aside>

      <p>We make the web work for you - with 15 years experience in cultivating
      well-crafted, maintainable code.  Whether it&apos;s WordPress or the
      latest React app we&apos;re here to see your vision through to the end.</p>

      <h2>Who we are</h2>

      <Member
        name="Andy Jacobs"
        github="https://github.com/funwhilelost"
        linkedin="https://www.linkedin.com/in/andyjacobs"
        image={andyImage}
      />

      <Member
        name="Alex Hartle"
        github="https://github.com/alexhartle"
        linkedin=""
        image={alexImage}
      />

      <Member
        name="Morgen Fett"
        github="https://github.com/morgen-montgomery"
        linkedin="https://www.linkedin.com/in/morgen-fett/"
        image={morgenImage}
      />

      {/* <p>Morgen</p> */}

      <p>We believe in worker-ownership and democracy at work.</p>

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
