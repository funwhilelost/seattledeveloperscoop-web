import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'

import logoImage from '../images/sdc.png'
import alexImage from '../images/alex.jpg'
import andyImage from '../images/andy.jpg'
import skylerImage from '../images/skyler.jpg'
import mikeImage from '../images/mike.jpg'
import inkImage from '../images/ink.jpg'
import morgenImage from '../images/morgen.jpg'
import Member from '../components/Member'

import '../styles/index.scss'

/* https://simpleicons.org/ */
import githubIcon from '../icons/github.svg'
import emailIcon from '../icons/minutemailer.svg'
// import twitterIcon from '../icons/twitter.svg'

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <Link to="/">SDC</Link>
    </div>
  </div>
)

const Footer = () => (
  <div className="footer">
    <div className="footer__contents">
      <ul className="footer__social">
        <li><a href="mailto:hello@seattledevelopers.coop"><img alt="email icon" src={emailIcon} className="footer__icon" /> Email Us</a></li>
        {/* <li><a href="https://twitter.com/seattledevcoop"><img src={twitterIcon} className="footer__icon" />  @seattledevcoop</a></li> */}
        <li><a href="https://github.com/SeattleDevelopersCoop/"><img alt="github icon" src={githubIcon} className="footer__icon" /> Github</a></li>
        {/* <li><Link to="/blog">Blog</Link></li> */}
      </ul>
    </div>
  </div>
)

export const IndexPage = ({ children }) => (
  <StaticQuery
     query={graphql`
      query SiteMetadataLookup {
        site {
          siteMetadata {
            title
            siteUrl
            description
            keywords
          }
        }
      }
    `}
    render={data => {
      // data is injected automatically from the 'pageQuery' defined below
      const { site: { siteMetadata: {
        title,
        // @TODO - https://www.gatsbyjs.com/docs/environment-variables/
        siteUrl,
        description,
        keywords
      }}} = data

      return (
        <div>
          {/* https://github.com/nfl/react-helmet#example */}
          <Helmet
            title={ title }
            meta={[
              { name: 'description', content: description },
              { name: 'keywords', content: keywords },
              { property: 'og:image', content: `${siteUrl}${logoImage}`}
            ]}
          >
            <link
              rel="apple-touch-icon"
              href={`${siteUrl}${logoImage}`}
            />
          </Helmet>
          <Header />
          <article className="home_page">
            <Helmet
              title={`${title} - Home`}
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
              <p>We&apos;re a collective of web developers empowering people with technology.  We
              don&apos;t seek unicorns, we <a href="https://medium.com/@sexandstartups/zebrasfix-c467e55f9d96">
              build zebras</a>.  Good work, democracy in the workplace,
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
              <h3>Current Members</h3>

              <Member
                name="Andy Jacobs"
                github="https://github.com/funwhilelost"
                linkedin="https://www.linkedin.com/in/andyjacobs"
                mastodon="https://social.coop/@funwhilelost"
                image={andyImage}
              />

              <Member
                name="Mike Lyons"
                github="https://github.com/mikelyons"
                linkedin="https://www.linkedin.com/in/mrlyons/"
                image={mikeImage}
              />

              <Member
                name="Ink Brownell"
                github="https://github.com/InkBrownell"
                linkedin="https://www.linkedin.com/in/ink-brownell-39146b160/"
                image={inkImage}
              />

              <h3>Former Members</h3>

              <Member
                name="Alex Hartle"
                github="https://github.com/alexhartle"
                linkedin="https://www.linkedin.com/in/alex-hartle/"
                image={alexImage}
              />

              <Member
                name="Skyler Hartle"
                github="https://github.com/skylerah"
                linkedin="https://www.linkedin.com/in/skylerhartle/"
                image={skylerImage}
              />

              <Member
                name="Morgen Fett"
                github="https://github.com/morgen-montgomery"
                linkedin="https://www.linkedin.com/in/morgen-fett/"
                image={morgenImage}
              />


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
            </section>
          </article>
          <Footer />
        </div>
      );
    }}
  />
);

export default IndexPage;