import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>As Elon Musk says “Over time I think we will probably see a closer merger of biological intelligence and digital intelligence… Some high bandwidth interface to the brain will be something that helps achieve a symbiosis between human and machine intelligence and maybe solves the control problem and the usefulness problem.”</p>
    </div>
  </div>
);

export default Possibility;
