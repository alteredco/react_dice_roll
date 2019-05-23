import React, {Component} from 'react';
import './RollDice.css';
import Die from './Die';

class RollDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four','five', 'six']
  };
  constructor(props) {
    super(props);
    this.state = {die1: 'one' , die2: 'one', rolling: false};
    this.roll = this.roll.bind(this);
  }
  roll() {
    const rolledNum1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const rolledNum2 = this.props.sides[Math.floor(Math.random()*this.props.sides.length)];
    this.setState({die1: rolledNum1, die2: rolledNum2, rolling: true});
    setTimeout(() => {
      this.setState({rolling : false});
    }, 1000);
  }
  render() {
    return(
      <div className="RollDice-container">
        <div className="RollDice-row">
          <Die 
          face = {this.state.die1}
          rolling = {this.state.rolling}
          />
          <Die 
          face = {this.state.die2}
          rolling = {this.state.rolling}
          />
        </div>
        <div className="RollDice-row">
          <button className="RollDice-btn" onClick={this.roll} disabled={this.state.rolling}>
            {this.state.rolling ? "Rolling..." : "Roll Dice!"}
          </button>
        </div>
      </div>
    )
  }
}

export default RollDice;