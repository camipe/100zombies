import React, { Component } from 'react';

import Game from './components/Game/Game';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>100% Zombies</h1>
        <Game />
      </div>
    );
  }
}

export default App;
