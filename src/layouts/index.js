import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../styles/index.scss'

{/* https://simpleicons.org/ */}
import githubIcon from '../icons/github.svg'
import emailIcon from '../icons/minutemailer.svg'
import twitterIcon from '../icons/twitter.svg'

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
        <li><a href="mailto:hello@seattledevelopers.coop"><img src={emailIcon} className="footer__icon" /> Email Us</a></li>
        {/* <li><a href="https://twitter.com/seattledevcoop"><img src={twitterIcon} className="footer__icon" />  @seattledevcoop</a></li> */}
        <li><a href="https://github.com/SeattleDevelopersCoop/"><img src={githubIcon} className="footer__icon" /> Github</a></li>
        {/* <li><Link to="/blog">Blog</Link></li> */}
      </ul>
    </div>
  </div>
)

const TemplateWrapper = ({ data, children }) => {
  return (
    <div>
      <Helmet
        title="Seattle Developer's Cooperative"
        meta={[
          { name: 'description', content: 'Great web developers providing fast, effective, and robust websites' },
          { name: 'keywords', content: 'web developer, developers, react, javascript, seattle, cooperative' },
        ]}
      />
      <Header />
      {children()}
      <Footer />
    </div>
)
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
