import React, { Component } from 'react';

import House from '../House/House';
import './Game.css';

class Game extends Component {
  state = {
    houses: Array(100).fill(false),
    rounds: 0,
  }

  resetGame() {
    const houses = Array(100).fill(false);

    this.setState({
      houses,
      rounds: 0,
    });
  }

  renderHouses() {
    const houses = this.state.houses.map((status, index) => {
      return <House key={index} status={status}/>
    })
    return houses;
  }

  render() {
    return (
      <div className="Game">
        <div>
          {this.renderHouses()}
        </div>
      </div>
    );
  }
}

export default Game;
