import React, { Component } from 'react';

import House from './components/House';
import './App.css';

class App extends Component {
  state = {
    houses: [false, true ,false, false, false],
    zombies: 1,
  }

  renderHouses() {
    const houses = this.state.houses.map((status, index) => {
      return <House key={index} status={status}/>
    })
    return houses;
  }

  render() {
    return (
      <div className="App">
        {this.renderHouses()}
      </div>
    );
  }
}

export default App;
