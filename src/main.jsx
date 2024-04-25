import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './index.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';

// Main component to be rendered
const Main = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}> {/* Wrap your entire application with BrowserRouter */}
      <NavBar /> {/* Navbar should be a part of the router context */}
      <Routes> {/* Routes should be direct children of BrowserRouter */}
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
};

// Render the Main component to the root element
ReactDOM.render(
  <React.StrictMode>
    <Main /> {/* Render your main component */}
  </React.StrictMode>,
  document.getElementById('root')
);
