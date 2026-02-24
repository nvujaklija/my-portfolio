import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch(currentSection) {
      case 'home':
        return <Home />;
      case 'resume':
        return <Resume />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">Nathan</h1>
          <ul className="nav-links">
            <li><button onClick={() => setCurrentSection('home')}>Home</button></li>
            <li><button onClick={() => setCurrentSection('resume')}>Resume</button></li>
            <li><button onClick={() => setCurrentSection('projects')}>Projects</button></li>
            <li><button onClick={() => setCurrentSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>
      
      <main className="main-content">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;