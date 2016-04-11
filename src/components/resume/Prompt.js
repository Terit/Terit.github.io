import React from 'react';

export default function Prompt({ dir, id }) {
  return (
    <p className="cli">
      <span className="red">~/resume{dir}</span>
      <span className="green"> $ </span>
      <span id={id}></span>
    </p>
  );
}

Prompt.propTypes = {
  dir: React.PropTypes.string,
  id: React.PropTypes.string.isRequired,
};
