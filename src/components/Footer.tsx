import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/nkosi-code" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/siphiwo-nkosi" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>This is <a href="https://github.com/nkosi-code" target="_blank" rel="noreferrer">Nkose-Code's</a> Digital Portfolio built with 💜</p>
    </footer>
  );
}

export default Footer;