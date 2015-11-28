import React from 'react';

import './job-item.scss';

export default class Job extends React.Component {
  render() {
    return (
      <div className="job-item">
        <div className="job-item-header">
          <h2 className="job-company">{this.props.company}</h2>
          <span className="job-timeframe">{this.props.timeframe}</span>
        </div>
        <h3 className="job-title clearfix">{this.props.title}</h3>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

Job.propTypes = {
  company: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  timeframe: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
};
