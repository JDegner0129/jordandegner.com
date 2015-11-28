import React from 'react';

import Job from './job-item.jsx';

export default class JobList extends React.Component {
  render() {
    const jobs = this.props.jobs.map(job => {
      return (
        <Job company={job.company}
          title={job.title}
          timeframe={job.timeframe}
          description={job.description} />
      );
    });

    return (
      <div className="job-list">
        {jobs}
      </div>
    );
  }
}

JobList.propTypes = {
  jobs: React.PropTypes.array.isRequired,
};
