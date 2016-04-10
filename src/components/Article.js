import React from 'react';

export default class Article extends React.Component {
  renderBody() {
    return { __html: this.props.body };
  }

  render() {
    return (
      <div className="slide">
        <div className="contents">
          <div>
            <h3>{this.props.header}</h3>
            <div dangerouslySetInnerHTML={this.renderBody()} />
          </div>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  header: React.PropTypes.string.isRequired,
  body: React.PropTypes.string.isRequired,
};
