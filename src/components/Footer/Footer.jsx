import React from 'react';
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <p>© {currentYear} — Honoring Heritage, Inspiring Generations.</p>
      <ul>
        <li>Our Story</li>
        <li>Traditions</li>
        <li>Contact Us</li>
      </ul>
    </footer>
  );
};

export default Footer;
