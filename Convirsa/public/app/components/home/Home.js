import React from 'react';

import GlobalHeader from '../global/Header.js';

require('../../../stylesheets/global/Header.scss');

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-wrapper">
        <GlobalHeader />
      </div>
    )
  }
}
