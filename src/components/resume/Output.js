import React from 'react';

export default function Output({ id, children }) {
  return (
    <div id={id} className="output">
      {children}
    </div>
  );
}

Output.propTypes = {
  id: React.PropTypes.string.isRequired,
  children: React.PropTypes.array.isRequired,
};
