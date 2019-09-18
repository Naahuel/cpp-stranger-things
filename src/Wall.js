import React, { Component } from 'react';
import './App.css';

class Wall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }
  }

  componentDidMount() {
    // Pre-cachear imagenes
    let images = {
      vacio: require(`./assets/images/vacio.gif`)
    };

    for (let index = 65; index < 91; index++) {
      // create an Image instance
      let img = new Image()
      // setting handler for load complete
      // set the src attribute for it. After this line image loading will start
      img.src = require(`./assets/images/${index}.gif`);
      images[index] = img.src;
    }

    this.setState({
      images
    });
  }

  render() {
    let imageName = (parseInt(this.props.letterCode) > 64 && parseInt(this.props.letterCode) < 91) ? this.props.letterCode : 'vacio';

    return (
      <div className="Wall">
        <img src={this.state.images[imageName]} alt="Stranger Things" />
      </div>
    );
  }
}

export default Wall;
