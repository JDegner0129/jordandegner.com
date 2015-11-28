import React from 'react';
import ReactDOM from 'react-dom';

import JobList from './components/job-list.jsx';

import './resume-app.scss';

class ResumeApp extends React.Component {
  render() {
    // TODO: pull this out of a file or external source?
    const jobs = [
      {
        company: 'Hudl',
        title: 'Developer Lead',
        timeframe: 'May 2014 - Present',
        description: `I work on Hudl's core feature set for its upcoming platform,
        writing the tools coaches and athletes will use to improve through video
        every day.`,
      },
      {
        company: 'Garmin',
        timeframe: 'May 2013 - August 2013',
        title: 'Software Engineer Intern',
        description: `I wrote unit and system tests for our aviation TCAS
        units, and identified new algorithms to increase TCAS accuracy after
        studying existing flight data and simulations.`,
      },
      {
        company: 'Sandhills Publishing',
        timeframe: 'May 2012 - August 2012',
        title: 'Software Engineer Intern',
        description: `I created custom Microsoft Dynamics CRM pages for our clients,
        as well as developing and consuming an internal localization directory for these pages.`,
      },
      {
        company: 'Baldwin, Hackett & Meeks, Inc.',
        timeframe: 'May 2011 - August 2011',
        title: 'Software Engineer Intern',
        description: `I wrote data mining scripts using Python and MySQL to assist
        clients in understanding and making judgments based on their health care records.
        After mining this information, I created a PHP web app to display the data
        in a more readable way.`,
      },
    ];

    return (
      <div>
        <div className="header">
          <div>
            <h1 className="header-name">Jordan Degner</h1>
            <h2 className="header-position">Software Engineer</h2>
          </div>
        </div>

        <JobList jobs={jobs} />

        <div className="footer">
          <span className="copyright">Copyright &copy; 2015 Jordan Degner</span>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<ResumeApp />, document.getElementById('app'));
