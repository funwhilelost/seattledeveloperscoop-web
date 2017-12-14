import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../styles/index.scss'

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
        <li><a href="mailto:hello@seattledevelopers.coop">Email Us</a></li>
        <li><a href="https://twitter.com/seattledevcoop">@seattledevcoop</a></li>
      </ul>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    {children()}
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
