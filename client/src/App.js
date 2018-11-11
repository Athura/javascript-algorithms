import React, { Component } from 'react';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Header>
      </div>
    );
  }
}

export default App;
