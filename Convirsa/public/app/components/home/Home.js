import React from 'react';

require('../../../stylesheets/global/Header.scss');

export default class Home extends React.Component {
  render() {
    return (
      <div className="global-header">
        <img className="global-header-logo" src="https://www.convirza.com/wp-content/themes/fluid-yeti/assets/img//header-logo.png" />
        <div className="global-header-mobile-menu">
          
        </div>
      </div>
    )
  }
}
