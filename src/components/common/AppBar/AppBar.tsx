import React, { useState } from 'react';
import { Button } from '../Button';
import './AppBar.css';

const AppBar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="appbar">
      <div className="appbar-container">
        {/* Logo Section */}
        <div className="appbar-logo">
          <a href="/">KitoGizi</a>
        </div>

        {/* Desktop Navigation */}
        <nav className="appbar-nav desktop-only">
          <ul className="appbar-nav-list">
            <li className="appbar-nav-item"><a href="#home">Home</a></li>
            <li className="appbar-nav-item"><a href="#about">About Us</a></li>
            <li className="appbar-nav-item"><a href="#services">Services</a></li>
            <li className="appbar-nav-item"><a href="#portfolio">Portfolio</a></li>
            <li className="appbar-nav-item"><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Call to Action Button */}
        <div className="appbar-actions desktop-only">
          <Button fill>Get a Quote</Button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="appbar-mobile-toggle mobile-only" 
          onClick={toggleMobileMenu}
          aria-label="Toggle Navigation"
        >
          <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="appbar-mobile-nav mobile-only">
          <ul className="appbar-mobile-nav-list">
            <li className="appbar-mobile-nav-item"><a href="#home" onClick={toggleMobileMenu}>Home</a></li>
            <li className="appbar-mobile-nav-item"><a href="#about" onClick={toggleMobileMenu}>About Us</a></li>
            <li className="appbar-mobile-nav-item"><a href="#services" onClick={toggleMobileMenu}>Services</a></li>
            <li className="appbar-mobile-nav-item"><a href="#portfolio" onClick={toggleMobileMenu}>Portfolio</a></li>
            <li className="appbar-mobile-nav-item"><a href="#contact" onClick={toggleMobileMenu}>Contact</a></li>
            <li className="appbar-mobile-nav-item">
              <Button fill fullWidth className="appbar-mobile-cta">Get a Quote</Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default AppBar;
