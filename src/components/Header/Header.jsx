import React, { useState } from 'react';
import './Header.css';

export default function Header() {
  const[toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  window.addEventListener('scroll', function () {
    const header = this.document.querySelector('.header');
    if (this.scrollY >= 80) {
      header.classList.add('scroll-header');
    } else {
      header.classList.remove('scroll-header');
    }
  });

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav_logo">
          Lim
        </a>
        <div className={toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list">
            <li className="nav_item">
              <a 
                href="#home" 
                onClick = {() => setActiveNav("#home")} 
                className={activeNav === "#home" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-estate nav_icon" /> 
                Home
              </a>
            </li>
            <li className="nav_item">
              <a 
                href="#about" 
                onClick = {() => setActiveNav("#about")} 
                className={activeNav === "#about" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-user nav_icon" /> 
                About
              </a>
            </li>
            <li className="nav_item">
              <a 
                href="#skills" 
                onClick = {() => setActiveNav("#skills")} 
                className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-file-alt nav_icon" /> 
                Skills
              </a>
            </li>
            <li className="nav_item">
              <a 
                href="#projects" 
                onClick = {() => setActiveNav("#projects")} 
                className={activeNav === "#projects" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-briefcase-alt nav_icon" /> 
                Projects
              </a>
            </li>
            <li className="nav_item">
              <a 
                href="#contact" 
                onClick = {() => setActiveNav("#contact")} 
                className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"}
              >
                <i className="uil uil-message nav_icon" /> 
                Contact
              </a>
            </li>
          </ul>
          <i class="uil uil-times nav_close" onClick={() => setToggle(!toggle)} />
        </div>
        <div className="nav_toggle" onClick={() => setToggle(!toggle)}>
          <i className="uil uil-apps" />
        </div>
      </nav>
    </header>
  );
}
