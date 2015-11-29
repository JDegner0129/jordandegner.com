import React from 'react';

import './footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <span className="copyright">Copyright &copy; 2015 Jordan Degner</span>
        <section className="social">
          <div className="twitter">
            <a href={this.props.twitterUrl}><span className="fa fa-fw fa-twitter"></span> Twitter</a>
          </div>
          <div className="facebook">
            <a href={this.props.facebookUrl}><span className="fa fa-fw fa-facebook"></span> Facebook</a>
          </div>
          <div className="github">
            <a href={this.props.githubUrl}><span className="fa fa-fw fa-github"></span> GitHub</a>
          </div>
        </section>
      </footer>
    );
  }
}

Footer.propTypes = {
  twitterUrl: React.PropTypes.string,
  facebookUrl: React.PropTypes.string,
  githubUrl: React.PropTypes.string,
};
