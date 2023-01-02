import React from 'react';
import Info from '../Info/Info';
import AboutImg from '../../assets/about.jpg';
import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My introduction</span>
      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />
        <div className="about_data">
          <Info />
          <p className="about_description">
            A full-stack developer, my strong communication skills and positive 
            attitude makes me an effective team player and I'm always looking 
            for ways to contribute to the success of the team. I am looking to 
            expand my skill set and gain even more knowledge in the software industry.
          </p>
        </div>
      </div>
    </section>
  )
}