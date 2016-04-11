import React from 'react';

import PortfolioItem from './PortfolioItem';

import portfolio from '../portfolio.json';

export default function Portfolio() {
  return (
    <div className="section" data-menuanchor="portfolio">
      {portfolio.map((item, i) => {
        return (
          <PortfolioItem
            key={i}
            name={item.name}
            link={item.link}
            repoLink={item.repoLink}
            imagePath={item.imagePath}
            description={item.description}
          />
        );
      })}
     </div>
  );
}
