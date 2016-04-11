import React from 'react';

export default function School({ name, description, dates }) {
  return (
    <div>
      <p>{name}</p>
      <p className="tab">{description}</p>
      <p className="tab">{dates}</p>
    </div>
  );
}

School.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  dates: React.PropTypes.string.isRequired,
};
