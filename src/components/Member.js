import React from 'react'

/* https://simpleicons.org/ */
import githubIcon from '../icons/github.svg'
import linkedinIcon from '../icons/linkedin.svg'
import mastodonIcon from '../icons/mastodon.svg'

const Member = ({ name, github, image, linkedin, mastodon }) => (
  <div className="content__member">
    <h3>{name}</h3>
    {/* see: https://www.gatsbyjs.org/packages/gatsby-image/ */}
    <div className="content__member-image">
      <img src={image} alt={`${name} Portrait`} />
    </div>
    <aside className="content__member-related">
      <a className="content__member-link" href={github} rel="me"><img alt="Github Icon" src={githubIcon} /></a>
      <a className="content__member-link" href={linkedin} rel="me"><img alt="LinkedIn Icon" src={linkedinIcon} /></a>
      {mastodon && (<a className="content__member-link" href={mastodon} rel="me"><img alt="Mastodon Icon" src={mastodonIcon} /></a>)}
    </aside>
  </div>
)

export default Member
