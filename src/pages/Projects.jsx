import React from 'react';
import Footer from '../components/Footer';

function Projects() {
  return (
    <div className="projects">
      <div className="content">
        <h2>Projects</h2>
        <div className="project-container">
        <div className="project">
          <h3>Calculator Project</h3>
          <a href="http://127.0.0.1:5500/Calculator/index.html" target="_blank" rel="noopener noreferrer">
          <img src="../images/calculator-screenshot.png" alt="Calculator Project" />

          </a>
          <p>Description: This is a simple calculator project built using HTML, CSS, and JavaScript.</p>
          <p>Click the image to try it out!</p>
        </div>
        <div className="project">
          <h3>Ping Pong Game Project</h3>
          <a href="http://127.0.0.1:5500/Ping-Pong-Game/index.html" target="_blank" rel="noopener noreferrer">
          <img src="../images/ping-pong-game-screenshot.png" alt="Ping Pong Game Project" />
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
