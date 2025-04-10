import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-JSFGNHy_Hl7nabU8pxmaNQ8oUJ-Yhp1jA&s" alt="Anandwan Logo" />
          Anandwan
        </Link>

        {/* Mobile menu button */}
        <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/awareness">Leprosy Awareness</Link>
          <Link to="/fundraiser">Fundraiser</Link>
          <Link to="/videos">Videos</Link> 
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link to="/awareness" onClick={() => setIsMenuOpen(false)}>Leprosy Awareness</Link>
          <Link to="/fundraiser" onClick={() => setIsMenuOpen(false)}>Fundraiser</Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          <Link to="/videos" onClick={() => setIsMenuOpen(false)}>Videos</Link> {/* ✅ Added this line */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
