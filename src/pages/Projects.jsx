import React from 'react';
import Footer from '../components/Footer';
import CalculatorPic from '../images/calculator-screenshot.png'
import PingPongPic from '../images/ping-pong-game-screenshot.png'

function Projects() {
  return (
    <div className="projects">
      <div className="content">
        <h2>Projects</h2>
        <div className="project-container">
        <div className="project">
          <h3>Calculator Project</h3>
          <a href="https://didarkhan97.github.io/Calculator/" target="_blank" rel="noopener noreferrer">
          <img src= {CalculatorPic} className='calculator' alt="Calculator Project" />

          </a>
          <p>Description: This is a simple calculator project built using HTML, CSS, and JavaScript.</p>
          <p>Click the image to try it out!</p>
        </div>
        <div className="project">
          <h3>Ping Pong Game Project</h3>
          <a href="https://didarkhan97.github.io/Ping-Pong-Game/" target="_blank" rel="noopener noreferrer">
          <img src= {PingPongPic} className='pingpong' alt="Ping Pong Game Project" />
          </a>
          <p>Description: This is a classic Ping Pong game built using HTML, CSS, and JavaScript.</p>
          <p>Click the image to play!</p>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
