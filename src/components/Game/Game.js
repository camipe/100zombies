import React, { Component } from 'react';

import House from '../House/House';
import './Game.css';

class Game extends Component {
  state = {
    games: [],
    houses: Array(100).fill(false),
    nrOfZombies: 1,
    days: 0,
  }

  reset() {
    const houses = Array(100).fill(false);

    this.setState({
      houses,
      days: 0,
      nrOfZombies: 1
    });
  }

  newRound() {
    const games = [...this.state.games];
    games.push(this.state.days);

    this.setState({games});
    this.reset()
  }

  sendZombie(houses, index) {
    if (houses[index] === true) {
      return null;
    } else {
      houses[index] = true;
      return 1;
    }
  }

  playDay() {
    const houses = [...this.state.houses];
    let newZombies = 0;

    for (let i = 0; i < this.state.nrOfZombies; i++) {
      const houseTarget = Math.floor(Math.random() * houses.length);
      newZombies += this.sendZombie(houses, houseTarget);
    }

    this.setState({
      houses,
      nrOfZombies: this.state.nrOfZombies + newZombies,
      days: this.state.days + 1,
    })
  }

  renderHouses() {
    const houses = this.state.houses.map((status, index) => {
      return <House key={index} status={status}/>
    })
    return houses;
  }

  render() {
    let gameInfo = <button onClick={() => this.playDay()}>New day!</button>

    if (this.state.nrOfZombies > 100) {
      gameInfo = <button onClick={() => this.newRound()}>New round!</button>
    }

    if (this.state.games.length === 10) {
      gameInfo = <div>
        Over 10 rounds it took an average of x days to infect all houses!
      </div>
    }
    
    return (
      <div className="Game">
      {gameInfo}
        <div>
          {this.renderHouses()}
        </div>
      </div>
    );
  }
}

export default Game;
