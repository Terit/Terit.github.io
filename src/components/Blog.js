import React from 'react';

import Article from './Article';

import articles from '../blog.json';

export default function Blog() {
  return (
    <div className="section" data-menuanchor="blog">
      {articles.map((post, i) => <Article key={i} header={post.header} body={post.body} />)}
      <div className="arrow-down">
        <i className="fa fa-caret-down"></i>
      </div>
    </div>
  );
}
