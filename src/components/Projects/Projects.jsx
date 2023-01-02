import React, { useEffect, useState } from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import { projectsData } from '../ProjectData/ProjectData';
import { projectsNav } from '../ProjectData/ProjectData';

export default function Projects() {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(function () {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  function handleClick(evt, index) {
    setItem({name: evt.target.textContent});
    setActive(index);
  }

  return (
    <div>
      <div className="project_filters">
        {projectsNav.map((item, index) => {
          return (
            <span 
              onClick={(evt) => {
                handleClick(evt, index);
              }} 
              className={`${active === index ? 'active-project' : ''} project_item`} key={index}
            >
                {item.name}
            </span>
          )
        })}
      </div>
      <div className="project_container container grid">
        {projects.map((item) => {
          return <ProjectCard item={item} key={item.id} />
        })}
      </div>
    </div>
  );
} 