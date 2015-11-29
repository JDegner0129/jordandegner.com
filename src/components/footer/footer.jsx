import React from 'react';

import './footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <section className="footer-content">
          <p className="copyright">Copyright &copy; 2015 Jordan Degner</p>
          <section className="social">
            <a href={this.props.twitterUrl}>
              <span className="fa fa-fw fa-twitter"></span>
            </a>
            <a href={this.props.facebookUrl}>
              <span className="fa fa-fw fa-facebook"></span>
            </a>
            <a href={this.props.githubUrl}>
              <span className="fa fa-fw fa-github"></span>
            </a>
            <a href={this.props.linkedinUrl}>
              <span className="fa fa-fw fa-linkedin"></span>
            </a>
            <a href={this.props.email}>
              <span className="fa fa-fw fa-envelope"></span>
            </a>
          </section>
        </section>
      </footer>
    );
  }
}

Footer.propTypes = {
  twitterUrl: React.PropTypes.string,
  facebookUrl: React.PropTypes.string,
  githubUrl: React.PropTypes.string,
  linkedinUrl: React.PropTypes.string,
  email: React.PropTypes.string,
};
