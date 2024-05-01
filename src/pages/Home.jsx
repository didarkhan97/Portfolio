import React from 'react';
import Footer from '../components/Footer';


function Home() {

   // Define your skills array
   const skills = [
    "JavaScript",
    "ReactJS",
    "HTML/CSS",
    // Add more skills as needed
  ];

  return (
    <div className="home">
      <div className="content">
        <h2>Hello</h2>
        <p>I’m Didar Khan, I enjoy learning new skills and as of late one of my hobbies have been learning how to code and implementing logic behind each piece of code. Feel free to browse around and get in contact with me for any advice, comments or concerns.</p>

        <div className="skills">
          <h3>Skills</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;