import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className="global-header">
        <img className="global-header-logo" src="https://www.convirza.com/wp-content/themes/fluid-yeti/assets/img//header-logo.png" />
        <div className="global-header-mobile-menu"></div>
        <div className="global-header-contact-container">
          <div className="global-header-contact-info-container">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <p>CALL NOW:</p>
          </div>
        </div>
      </div>
    )
  }
}
