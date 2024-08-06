import React from 'react';
import Footer from '../components/Footer';
import resumePDF from '../pdfs/resume.pdf';

function Resume() {
  return (
    <div className="resume">
      <div className="content">
        <h2>Resume Highlights</h2>
        <h3>Education</h3>
        <ul>
          <li>New York City College of Technology</li>
          <li>Nebula Academy Software Engineering Program</li>
        </ul>
        <h3>Technical Skills</h3>
        <ul>
          <li>Programming: JavaScript, HTML, CSS</li>
          <li>Frameworks/Libraries: ReactJS</li>
        </ul>
        <div className="resume-actions">
          <a href={resumePDF} className="view-resume" target="_blank" rel="noopener noreferrer">View Resume</a>
          <a href={resumePDF} download="resume.pdf" className="download-resume">Download Resume</a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resume;
