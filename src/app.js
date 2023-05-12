import React from "react";
import Display from './Components/Display'
import ButtonPanel from './Components/ButtonPanle'
import calculate from './Components/logic/calculate'
import './app.css'

export default class App extends React.Component {
    state = {
      total: null,
      next: null,
      operation: null,
    };
  
    handleClick = buttonName => {
      this.setState(calculate(this.state, buttonName));
    };
  
    render() {
      return (
        <div className="component-app">
          <Display value={this.state.next || this.state.total || "0"} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      );
    }
  }