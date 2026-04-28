import React from "react";
import pos from '../assets/images/POS-System.png';
// import tourn from '../assets/images/';
// import chess from '../assets/images/';
// import tourn from '../assets/images/';
import pro from '../assets/images/progress.jpeg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                    <a href="https://github.com/nkosi-code/pos-system" target="_blank" rel="noreferrer"><img src={pos} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/nkosi-code/pos-system" target="_blank" rel="noreferrer"><h2>POS System</h2></a>
                    <p>Full-stack POS system with authentication, inventory management, and real-time transaction handling using ASP.NET Core, React, and SQL Server.</p>
            </div>
            <div className="project">
                    <a href="https://github.com/nkosi-code/TournamentSystem-API" target="_blank" rel="noreferrer"><img src={pro} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/nkosi-code/TournamentSystem-API" target="_blank" rel="noreferrer"><h2>Tournament.API</h2></a>
                <p>This will be a website where organizers can host their own tournaments online.</p>
            </div>
            <div className="project">
                    <a href="https://github.com/nkosi-code/chess-app" target="_blank" rel="noreferrer"><img src={pro} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/nkosi-code/chess-app" target="_blank" rel="noreferrer"><h2>Chess App</h2></a>
                <p>This will be a free to play multiplayer chess game.</p>
            </div>
            <div className="project">
                    <a href="https://github.com/nkosi-code" target="_blank" rel="noreferrer"><img src={pro} className="zoom" alt="thumbnail" width="100%"/></a>
                    <a href="https://github.com/nkosi-code" target="_blank" rel="noreferrer"><h2>Unknown Project</h2></a>
                <p>Project being generated. Any collaborations appreceated.</p>
                </div>
                    
        </div>
    </div>
    );
}

export default Project;
