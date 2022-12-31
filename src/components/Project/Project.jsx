import React from 'react';
import ProjectCard from '../Projects/Projects';
import './Project.css';

export default function Project() {
  return (
    <section className="project section" id="section" >
      <h2 className="section_title">Projects</h2>
      <span className="section_subtitle">Most recent works</span>
      <ProjectCard />
    </section>
  )
}