import React from 'react';
import ReactDOM from 'react-dom';

import { Header, Footer, JobList, SkillBanner } from './components';

import './resume-app.scss';

// TODO: pull this out of a file or external source?
const personalInfo = {
  name: 'Jordan Degner',
  title: 'Software Engineer',
};

const socialInfo = {
  twitterUrl: 'https://twitter.com/jordandegner',
  facebookUrl: 'https://facebook.com/jordan.degner',
  githubUrl: 'https://github.com/jdegner0129',
};

// names correspond to the names found at http://devicon.fr
const skills = ['csharp', 'javascript', 'python', 'mongodb'];

// tech corresponds to the names found at http://devicon.fr
const jobInfo = [
  {
    company: 'Hudl',
    url: 'http://www.hudl.com',
    title: 'Developer Lead',
    timeframe: 'May 2014 - Present',
    description: `I work on Hudl's core feature set for its upcoming platform,
    writing the tools coaches and athletes will use to improve through video
    every day.`,
    tech: ['csharp', 'javascript', 'mongodb', 'sass', 'react', 'backbonejs'],
  },
  {
    company: 'Garmin',
    url: 'http://www.garmin.com',
    timeframe: 'May 2013 - August 2013',
    title: 'Software Engineer Intern',
    description: `I wrote unit and system tests for our aviation TCAS
    units, and identified new algorithms to increase TCAS accuracy after
    studying existing flight data and simulations.`,
    tech: ['c', 'cplusplus', 'python'],
  },
  {
    company: 'Sandhills Publishing',
    url: 'http://www.sandhills.com',
    timeframe: 'May 2012 - August 2012',
    title: 'Software Engineer Intern',
    description: `I created custom Microsoft Dynamics CRM pages for our clients,
    as well as developing and consuming an internal localization directory for these pages.`,
    tech: ['dot-net', 'javascript', 'mysql'],
  },
  {
    company: 'Baldwin Hackett & Meeks, Inc.',
    url: 'http://www.bhmi.com',
    timeframe: 'May 2011 - August 2011',
    title: 'Software Engineer Intern',
    description: `I wrote data mining scripts using Python and MySQL to assist
    clients in understanding and making judgments based on their health care records.
    After mining this information, I created a PHP web app to display the data
    in a more readable way.`,
    tech: ['python', 'java', 'php', 'mysql'],
  },
];

class ResumeApp extends React.Component {
  render() {
    return (
      <div>
        <Header name={personalInfo.name} title={personalInfo.title} />

        <SkillBanner skills={skills} />

        <JobList jobs={jobInfo} />

        <Footer twitterUrl={socialInfo.twitterUrl}
          facebookUrl={socialInfo.facebookUrl}
          githubUrl={socialInfo.githubUrl} />
      </div>
    );
  }
}

ReactDOM.render(<ResumeApp />, document.getElementById('app'));
