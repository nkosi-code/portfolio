import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
                  <img src="https://media.licdn.com/dms/image/v2/D4E03AQHQTwPc-Q3DuA/profile-displayphoto-shrink_800_800/B4EZpq2g7fIQAc-/0/1762729267729?e=1778716800&v=beta&t=1HOYrwEAxKP8fbBdUEpFe3B_vA7cur_nOR7fH_r0fhQ" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nkosi-code" target="_blank" rel="noreferrer"><GitHubIcon/></a>
                      <a href="https://www.linkedin.com/in/siphiwo-nkosi" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          <h1>Siphiwo Nkosi</h1>
          <p>Full-Stack Developer | Building Real-World Applications with ASP.NET & React</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/nkosi-code" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/siphiwo-nkosi" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;