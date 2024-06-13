import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Financepower</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#About us">About us</a></li>
          <li><a href="#Our Services">Our Services</a></li>
          <li><a href="#The Team">The Team</a></li>
          <li><a href="#Portofolio">Portofolio</a></li>
          <li><a href="#Log in">Log in</a></li>
          <li><a href="#signup" class="signup-button">Sign Up</a></li> 
        </ul>
      </nav>
    </header>
  );
}

export default Header;
