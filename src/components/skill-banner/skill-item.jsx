import React from 'react';

import './skill-item.scss';

export default class Skill extends React.Component {
  render() {
    const iconClass = `skill-icon devicon-${this.props.name}-plain`;

    return (
      <div className="skill-item">
        <span className={iconClass}></span>
      </div>
    );
  }
}

Skill.propTypes = {
  name: React.PropTypes.string.isRequired,
};
