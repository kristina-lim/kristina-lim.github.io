import React from 'react';
import FrontendSkills from '../FrontendSkills/FrontendSkills';
import BackendSkills from '../BackendSkills/BackendSkills';
import './Skills.css';

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>
      <div className="skills_container container grid">
        <FrontendSkills />
        <BackendSkills />
      </div>
    </section>
  );
}