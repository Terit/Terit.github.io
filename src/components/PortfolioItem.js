import React from 'react';

export default function PortfolioItem({ name, repoLink, imagePath, description, link }) {
  return (
    <div className="slide">
      <div className="contents">
        <div>
          <h3>
            {name}
            <small className="text-right">
              <a href={repoLink} target="_blank">Source</a>
            </small>
          </h3>

          <img src={imagePath} />

          <p>{description}</p>
          <p><a href={link} target="_blank">See it live</a></p>
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
