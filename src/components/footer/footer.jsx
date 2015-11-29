import React from 'react';

import './footer.scss';

export default class Footer extends React.Component {
  render() {
    const socialItems = this.props.socialItems.map(item => {
      const itemClass = `fa fa-fw fa-${item.media}`;

      return (
        <a key={item.media} href={item.url}>
          <span className={itemClass}></span>
        </a>
      );
    });

    return (
      <footer className="footer">
        <section className="footer-content">
          <p className="copyright">Copyright &copy; 2015 Jordan Degner</p>
          <section className="social">
            {socialItems}
          </section>
        </section>
      </footer>
    );
  }
}

Footer.propTypes = {
  socialItems: React.PropTypes.array.isRequired,
};

Footer.defaultProps = {
  socialItems: [],
};
