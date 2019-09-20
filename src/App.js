import React, { Component } from 'react';
import './App.css';
import Wall from './Wall';

class App extends Component {
  constructor(props){
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.state = {
      key: null
    }
  }

  handleKeyDown(event){
    this.setState({
      key: event.keyCode
    });
  }

  handleKeyUp(){
    this.setState({
      key: null
    });
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  render() {
    return (
      <div className="App">
        <h1>Chicas <span>Programadoras</span></h1>
        <Wall letterCode={this.state.key} />
      </div>
    );
  }
}

export default App;
