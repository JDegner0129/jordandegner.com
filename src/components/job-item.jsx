import React from 'react';

import './job-item.scss';

export default class Job extends React.Component {
  render() {
    return (
      <div className="job-item">
        <h2><span className="job-company">{this.props.company}</span> <small>{this.props.title}</small></h2>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

Job.propTypes = {
  company: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
};
