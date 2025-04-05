import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import LeprosyAwarenessPage from './LeprosyAwarenessPage';
import Fundraiser from './Fundraiser';


function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/awareness" element={<LeprosyAwarenessPage />} />
            <Route path="/Fundraiser" element={<Fundraiser />} />
            
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;