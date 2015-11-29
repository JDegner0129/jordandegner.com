import React from 'react';
import Skill from './skill-item.jsx';

import './skill-banner.scss';

export default class SkillBanner extends React.Component {
  render() {
    const skills = this.props.skills.map(skill => {
      return (
        <Skill key={skill} name={skill} />
      );
    });

    return (
      <section className="skill-banner">
        <h1>I love:</h1>
        {skills}
      </section>
    );
  }
}

SkillBanner.propTypes = {
  skills: React.PropTypes.array.isRequired,
};
