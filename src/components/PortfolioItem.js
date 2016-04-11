import React from 'react';

export default function PortfolioItem({ name, repoLink, imagePath, description, link }) {
  const demoLink = link ? <a href={link} target="_blank">See it live</a> : 'No longer maintained';
  const repoLinkText = repoLink ? 'Source' : 'Private Repo';
  return (
    <div className="slide">
      <div className="contents">
        <div>
          <h3>
            {name}
            <small className="text-right">
              <a href={repoLink} target="_blank">{repoLinkText}</a>
            </small>
          </h3>

          <img src={imagePath} />

          <p>{description}</p>
          <p>{demoLink}</p>
        </div>
      </div>
    </div>
  );
}

PortfolioItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  repoLink: React.PropTypes.string.isRequired,
  imagePath: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired,
};
