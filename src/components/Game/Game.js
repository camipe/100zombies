import React, { Component } from 'react';

import House from '../House/House';
import './Game.css';

class Game extends Component {
  state = {
    // keeps track of the score for each game
    games: [],
    // keeps track of the houses' infection status
    houses: Array(100).fill(false),
    nrOfZombies: 1,
    days: 0,
  }

  // resets the houses and zombies for a new game.
  reset() {
    const houses = Array(100).fill(false);
    this.setState({
      houses,
      days: 0,
      nrOfZombies: 1
    });
  }

  // saves the game score and resets the game board.
  newGame() {
    const games = [...this.state.games];
    games.push(this.state.days);

    this.setState({games});
    this.reset()
  }

  // reset the whole game and start over from the beginning.
  resetGame() {
    this.setState({games: []});
    this.reset();
  }

  // infects a specific house in the houses array and returns a zombie if the house was not yet infected
  sendZombie(houses, index) {
    if (houses[index] === true) {
      return 0;
    } else {
      houses[index] = true;
      return 1;
    }
  }

  // sends out all the zombies to infect new houses for the the day
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
    const {nrOfZombies, games, days} = this.state;

    let message = null;
    let button = <button onClick={() => this.playDay()}>New Day</button>

    // when all houses are infected show user instructions to start a new round.
    if (nrOfZombies > 100) {
      message = <p>All houses are infected, start a new round by clicking the button.</p>
      button = <button onClick={() => this.newGame()}>New Game</button>
    }

    // when 10 rounds has been played show average score and instructions to start over.
    if (games.length === 10) {
      const average = games.reduce((a, b) => a + b) / games.length;
      message = <p>
        Over 10 games it took an average of {average.toFixed(2)}  days to infect all houses! Click the button to start a new game.
      </p>
      button = <button onClick={() => this.resetGame()}>Start Over</button>
    }

    return (
      <div className="Game">
        <p>
          Games played: {games.length} of 10
          <br />
          Day: {days}
          <br />
          Zombies: {nrOfZombies}
        </p>
        {button}
        {message}
        <div>
          {this.renderHouses()}
        </div>
      </div>
    );
  }
}

export default Game;
