import React, { useRef } from 'react';
import './NavBar.css';

export default function NavBar() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);

  const scrollToSection = sectionRef => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav>
        <ul>
          <li><a href="#" onClick={() => scrollToSection(section1Ref)}>Technical Skills</a></li>
          <li><a href="#" onClick={() => scrollToSection(section2Ref)}>Projects</a></li>
          <li><a href="#" onClick={() => scrollToSection(section3Ref)}>Resume</a></li>
          <li><a href="#" onClick={() => scrollToSection(section4Ref)}>Contact Me</a></li>
        </ul>
      </nav>
    </>
  );
}