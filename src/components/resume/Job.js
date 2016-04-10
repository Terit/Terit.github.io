import React from 'react';

export default function Job({ name, title, dates, description }) {
  return (
    <div>
      <p>{name}</p>
      <p className="tab">{title} - {dates}</p>
      {description.map((line, i) => <p className="double-tab" key={i}>{line}</p>)}
    </div>
  );
}

Job.propTypes = {
  name: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  dates: React.PropTypes.string.isRequired,
  description: React.PropTypes.array.isRequired,
};


