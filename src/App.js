import React, { Component } from 'react';
import './App.css';
import Wall from './Wall';

class App extends Component {
  constructor(props){
    super(props);

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = {
      key: null
    }
  }

  handleKeyDown(event){
    this.setState({
      key: event.keyCode
    }, () => {
      setTimeout(() => {
        this.setState({
          key: null
        })
      }, 1000)
    });
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
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
