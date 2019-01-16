import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="App-link">New session</button>
          <button className="App-link">Existing session</button>
        </header>
      </div>
    );
  }
}

export default App;
