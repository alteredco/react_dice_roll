import React, {Component} from 'react';
import './Die.css';

class Die extends Component {
  render() {
    return(
      <div className="Die-container">
        <i className={`fas fa-dice-${this.props.face} ${this.props.rolling?"shaking" : ""}`}></i>
      </div>
    )
  }
}

export default Die;