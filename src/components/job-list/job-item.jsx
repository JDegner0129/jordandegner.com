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
      <div className="job-item">
        <div className="job-item-header">
          <h2 className="job-company"><a href={this.props.url}>{this.props.company}</a></h2>
          <span className="job-timeframe">{this.props.timeframe}</span>
        </div>
        <h3 className="job-title clearfix">{this.props.title}</h3>
        <p className="job-description">{this.props.description}</p>
        <div className="job-tech">
          {techIcons}
        </div>
      </div>
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
