import React from 'react';
import './App.css';

const Wall = ({letterCode}) => {
  let imageName = (parseInt(letterCode) > 64 && parseInt(letterCode) < 91) ? letterCode : 'vacio';
  let image = require(`./assets/images/${imageName}.gif`);

  return (
    <div className="Wall">
      <img src={image} alt="Stranger Things" />
    </div>
  );
}

export default Wall;
