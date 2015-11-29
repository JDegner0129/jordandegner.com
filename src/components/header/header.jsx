import React from 'react';

import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <section className="header-content">
          <h1 className="header-name">{this.props.name}</h1>
          <h2 className="header-title">{this.props.title}</h2>
        </section>
      </header>
    );
  }
}

Header.propTypes = {
  name: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
};
