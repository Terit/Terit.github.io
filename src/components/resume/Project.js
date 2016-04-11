import React from 'react';

export default function Project({ name, description, link, repoLink }) {
  const demoLink = link ? <a href={link} target="_blank"># Demo /</a> : '#';
  const repoLinkText = repoLink ? 'Source' : ' No longer maintained :(';

  return (
    <div>
      <p className="vim"><span>def </span>{name}</p>
      <p className="tab">{description}</p>
      <p className="tab">
        {demoLink}
        <a href={repoLink} target="_blank">{repoLinkText}</a>
      </p>
      <p className="vim"><span>end</span></p>
      &nbsp;
    </div>
  );
}

Project.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  link: React.PropTypes.string,
  repoLink: React.PropTypes.string,
};
