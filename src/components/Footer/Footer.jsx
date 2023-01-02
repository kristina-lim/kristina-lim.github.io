import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Lim</h1>
        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">About</a>
          </li>
          <li>
            <a href="#skills" className="footer_link">Skills</a>
          </li>
          <li>
            <a href="#projects" className="footer_link">Projects</a>
          </li>
        </ul>
        <div className="footer_social">
          <a href="https://github.com/kristina-lim" className="home_social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-github" />
          </a>
          <a href="https://linkedin.com/in/kristina-lim-01" className="home_social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin" />
          </a>
          <a href="mailto:khlim.developer@gmail.com" className="home_social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxs-envelope" />
          </a>
        </div>
        <span className="footer_copy">
          &#169; kristina-lim. All rights reserved.
        </span>
      </div>
    </footer>
  )
}