import React from 'react';
import './Header.css'


const Header = () => {
  return (
    <header className="header">
      <h1>Illuminant</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <i><a href="/contact">Contact</a></i>
        </ul>
      </nav>
    </header>  );
};

export default Header;