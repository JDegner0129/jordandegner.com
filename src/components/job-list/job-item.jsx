import React from 'react';

import './job-item.scss';

export default class Job extends React.Component {
  render() {
    const techIcons = this.props.tech.map(tech => {
      const techClass = `devicon-${tech}-plain`;
      return (
        <span key={tech} className={techClass}></span>
      );
    });

    return (
      <article className="job-item">
        <header className="job-item-header">
          <h1 className="company"><a href={this.props.url}>{this.props.company}</a></h1>
          <span className="timeframe">{this.props.timeframe}</span>
          <h2 className="title clearfix">{this.props.title}</h2>
        </header>
        <section className="job-item-description">
          <p>{this.props.description}</p>
        </section>
        <footer className="job-item-technology">
          {techIcons}
        </footer>
      </article>
    );
  }
}

Job.propTypes = {
  url: React.PropTypes.string.isRequired,
  company: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  timeframe: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  tech: React.PropTypes.array.isRequired,
};

Job.defaultProps = {
  description: '',
  tech: [],
};
