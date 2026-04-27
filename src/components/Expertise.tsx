import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C#",
    "C++",
    "Java",
    "DART",
    "Tailwind",
    "SQL",
    ".NET",
    "Testing",
    "Debugging",
    "System Maintenance",
    "SDLC",
    "Problem Solving",
];

const labelsSecond = [
    "Community Management",
    "Teamwork",
    "Communication",
    "Conflict Resolution",
    "Event Cordination",
    "Time Management",
    "Reports",
    "Disocrd Moderation",
];

const labelsThird = [
    "Problem Solving",
    "Analytic Thinking",
    "Strategic Thinkinkg",
    "Mentorship",
    "Self-Learning",
    "Communication",
    "Time Management",
    "Spanish (Intermediate)",
    "Graphic Design",
    "Photography",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Development</h3>
                        <p>Developing and maintaining production-level applications within a retail point-of-sale system, ensuring reliability, performance, and scalability in real-world environments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>Collaboration & Communication</h3>
                        <p>Facilitated communication between participants and administrators in eSports tournaments using Discord and WhatsApp, ensuring coordination, rule enforcement, and smooth event execution. Also organized and hosted community tournaments.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Problem Solving & Engineering Mindset</h3>
                        <p>Developed strong problem-solving and analytical thinking through chess coaching, competitive esports, and continuous self-learning in programming, design, and language development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
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