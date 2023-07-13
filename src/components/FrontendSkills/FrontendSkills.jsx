import React from 'react';

export default function FrontendSkills() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend developer</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills_name">HTML</h3>
              <img 
                className="skills_icon" 
                src="https://cdn-icons-png.flaticon.com/512/3104/3104037.png" 
                alt="html" 
                width="40rem" 
                height="40rem" 
              />
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills_name">CSS</h3>
              <img 
                className="skills_icon" 
                src="https://cdn-icons-png.flaticon.com/512/3097/3097811.png" 
                alt="css" 
                width="40rem" 
                height="40rem" 
              />
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills_name">JavaScript</h3>
              <img 
                className="skills_icon" 
                src="https://cdn-icons-png.flaticon.com/512/3097/3097978.png" 
                alt="js" 
                width="40rem" 
                height="40rem" 
              />
            </div>
          </div>
        </div>
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills_name">Bootstrap</h3>
              <img 
                className="skills_icon" 
                src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" 
                alt="bootstrap" 
                width="40rem" 
                height="40rem" 
              />
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills_name">React</h3>
              <img 
                className="skills_icon" 
                src="https://cdn-icons-png.flaticon.com/512/4069/4069174.png" 
                alt="react" 
                width="40rem" 
                height="40rem" 
              />
            </div>
          </div>
          {/* <div className="skills_data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills_name">GitHub</h3>
              <img 
                className="skills_icon" 
                src="https://cdn-icons-png.flaticon.com/512/2111/2111292.png" 
                alt="github" 
                width="40rem" 
                height="40rem" 
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}