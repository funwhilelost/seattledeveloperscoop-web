import React from 'react'

{/* https://simpleicons.org/ */}
import githubIcon from '../icons/github.svg'
import linkedinIcon from '../icons/linkedin.svg'

const Member = ({ name, github, image, linkedin }) => (
  <div className="content__member">
    <h3>{name}</h3>
    {/* see: https://www.gatsbyjs.org/packages/gatsby-image/ */}
    <div className="content__member-image">
      <img src={image} alt={`${name} Profile Image`} />
    </div>
    <aside className="content__member-related">
      <a className="content__member-link" href={github}><img src={githubIcon} /></a>
      <a className="content__member-link" href={linkedin}><img src={linkedinIcon} /></a>
    </aside>
  </div>
)

export default Member
