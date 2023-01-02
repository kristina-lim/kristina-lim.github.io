import React from 'react';

export default function BackendSkills() {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Backend Developer</h3>
      <div className="skills_box">
        <div className="skills_group">
          <div className="skills_data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills_name">MongoDB</h3>
              <img 
                className="skills_icon" 
                src="https://cdn-icons-png.flaticon.com/512/861/861054.png" 
                alt="mongo" 
                width="40rem" 
                height="40rem" 
              />
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills_name">Express.js</h3>
              <img 
                className="skills_icon" 
                src="https://cdn-icons-png.flaticon.com/512/477/477532.png" 
                alt="express" 
                width="40rem" 
                height="40rem" 
              />
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills_name">Node.js</h3>
              <img 
                className="skills_icon" 
                src="https://cdn-icons-png.flaticon.com/512/919/919825.png" 
                alt="node" 
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
              <h3 className="skills_name">Python</h3>
              <img 
                className="skills_icon" 
                src="https://cdn-icons-png.flaticon.com/512/180/180867.png" 
                alt="python" 
                width="40rem" 
                height="40rem" 
              />
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills_name">Django</h3>
              <img 
                className="skills_icon" 
                src="https://i.imgur.com/r72rvmz.png" 
                alt="django" 
                width="40rem" 
                height="40rem" 
              />
            </div>
          </div>
          <div className="skills_data">
            <i className="bx bx-badge-check" />
            <div>
              <h3 className="skills_name">PostgreSQL</h3>
              <img 
                className="skills_icon" 
                src="https://cdn-icons-png.flaticon.com/512/5968/5968388.png" 
                alt="postgresql" 
                width="40rem" 
                height="40rem" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}