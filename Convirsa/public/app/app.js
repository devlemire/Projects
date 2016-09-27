import React from 'react';
import ReactDOM from 'react-dom';

export default class ConvirsaApp extends React.Component {
  render() {
    return (
      <div>
        <p>Hello world</p>
      </div>
    ) 
  }
}

ReactDOM.render(<ConvirsaApp />, document.getElementById('app'));
