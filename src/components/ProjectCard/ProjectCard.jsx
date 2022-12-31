import React from 'react';

export default function ProjectCard({item}) {
  return (
    <div className="project_card" key={item.id}>
      <img src={item.image} alt="" className="project_img" />
      <h3 className="project_title">{item.title}</h3>
      <a href={item.github} target="_blank" className="project_button">
        GitHub <i class='bx bxl-github project_button-icon' />
      </a>
      <a href={item.demo} target="_blank" className="project_button">
        Demo <i className="bx bx-right-arrow-alt project_button-icon" />
      </a>
    </div>
  )
}