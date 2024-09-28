import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import LearningMaterials from './components/LearningMaterials';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/" className="logo-link">Fun & Learn</Link>
          </div>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login And Sign Up</Link></li>
            
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/Feedback">Feedback</Link></li>
            <li><Link to="/learning-materials">Learning Materials</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route path="/learning-materials" element={<LearningMaterials />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
