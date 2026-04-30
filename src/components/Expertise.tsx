import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDisplay, faCogs, faServer, faUsers, faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavScript",
    "Tailwind CSS",
    "TypeScript",
    "Git",
];

const labelsSecond = [
    "C#",
    ".Net",
    "SQL",
    "REST APIs",
];

const labelsThird = [
    "HTML",
    "CSS",
    "SCSS",
    "Tailwind CSS",
    "React",    
];

const labelsFourth = [
    "Algorithms",
    "Data Structures",
    "OOP Principles",
    "SQL",
];

const labelsFifth = [
    "Team Collaboration",
    "Communication",
    "Conflict Resolution",
    "Git",
    "Time Management",
];

const labelsSixth = [
    "Analyticcal Thinking",
    "Debugging",
    "System Thinking",
    "Self-Learning",
    "Adaptability",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>Full Stack Development</h3>
                        <p>Building scalable and maintainable web applications with a focus on performance and clean architecture.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech Stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faServer} size="3x" />
                        <h3>Backend Engineering</h3>
                        <p>Building and working with structured, efficient systems using strongly typed languages and database-driven applications.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech Stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDisplay} size="3x" />
                        <h3>UI Development & Responsive Design</h3>
                        <p>Designing and building responsive, user-focused interfaces with attention to usability, consistency, and modern design practices across web applications.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech Stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faCogs} size="3x" />
                        <h3>Core Engineering Principles</h3>
                        <p>Applying core software engineering principles to build efficient, maintainable, and scalable systems.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Core Concepts:</span>
                            {labelsFourth.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                                      
                <div className="skill">
                    <FontAwesomeIcon icon={faUsers} size="3x"/>
                    <h3>Collaboration & Communication</h3>
                        <p>Working effectively in team and community environments through clear communication, conflict resolution, and coordination across shared responsibilities and events.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core Skills:</span>
                        {labelsFifth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBrain} size="3x"/>
                    <h3>Problem Solving & Engineering Mindset</h3>
                        <p>Applying structured problem-solving and continuous learning to improve technical and analytical skills.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Core Skills:</span>
                        {labelsSixth.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;