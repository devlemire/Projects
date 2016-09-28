import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/home/Home.js';

export default class ConvirsaApp extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home} />
      </Router>
    )
  }
}

ReactDOM.render(<ConvirsaApp />, document.getElementById('app'));
