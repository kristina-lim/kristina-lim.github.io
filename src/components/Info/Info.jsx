import React from 'react';

export default function Info() {
  return (
    <div className="about_info grid">
      <div className="about_box">
        <i class='bx bxs-school' />
        <h3 className="about_title">Scholarly Experience</h3>
        <span className="about_subtitle">Graduated with a certificate at General Assembly</span>
      </div>
      <div className="about_box">
        <i class='bx bx-code' />
        <h3 className="about_title">Development Experience</h3>
        <span className="about_subtitle">1 year</span>
      </div>
      <div className="about_box">
        <i class='bx bx-code-alt' />
        <h3 className="about_title">Coded Projects</h3>
        <span className="about_subtitle">5+ completed</span>
      </div>
    </div>
  )
}