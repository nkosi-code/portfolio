import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
                  <img src="https://media.licdn.com/dms/image/v2/D4E03AQHQTwPc-Q3DuA/profile-displayphoto-shrink_400_400/B4EZpq2g7fIQAg-/0/1762729267729?e=1776902400&v=beta&t=7A_MAdB0R8OX4Zwfd01UqSLaU94VU0Qu28kBoNZN70U" alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/nkosi-code" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/siphiwo-nkosi" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Siphiwo Nkosi</h1>
          <p>Full-Stack Developer | ASP.NET Core, React, SQL Server</p>

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