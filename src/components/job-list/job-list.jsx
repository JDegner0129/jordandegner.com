import React from 'react';

import Job from './job-item.jsx';
import './job-list.scss';

export default class JobList extends React.Component {
  render() {
    const jobs = this.props.jobs.map(job => {
      return (
        <Job key={job.company}
          company={job.company}
          url={job.url}
          title={job.title}
          timeframe={job.timeframe}
          description={job.description}
          tech={job.tech} />
      );
    });

    return (
      <section className="job-list">
        {jobs}
      </section>
    );
  }
}

JobList.propTypes = {
  jobs: React.PropTypes.array.isRequired,
};

JobList.defaultProps = {
  jobs: [],
};
