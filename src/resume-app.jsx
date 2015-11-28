import React from 'react';
import ReactDOM from 'react-dom';

import JobList from './components/job-list.jsx';

import './resume-app.scss';

class ResumeApp extends React.Component {
  render() {
    // TODO: pull this out of a file or external source?
    const jobs = [{
      company: 'Hudl',
      title: 'Developer Lead',
      description: 'Hudl is a pretty awesome place.',
    }, {
      company: 'Garmin',
      title: 'Software Engineer Intern',
      description: 'Garmin was okay, but KC was pretty damn awesome.',
    }, {
      company: 'Sandhills Publishing',
      title: 'Software Engineer Intern',
      description: 'Suits every day? Count me out.',
    }, {
      company: 'Baldwin, Hackett & Meeks, Inc.',
      title: 'Software Engineer Intern',
      description: 'I had no idea what was going on.',
    }];

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
