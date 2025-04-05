import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Anandwan</h3>
          <p>
            A community rehabilitation center founded by Baba Amte dedicated to serving those affected by leprosy and other marginalized communities.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/awareness">Leprosy Awareness</Link>
            <Link to="/fundraiser">Support Us</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-icons">
            <a href="#"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a>
            <a href="#"><svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
          </div>
          <p>Subscribe to our newsletter:</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Anandwan. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
