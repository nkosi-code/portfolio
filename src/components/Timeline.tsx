import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

const getDuration = (startYear: number, startMonth: number): string => {
    const now = new Date();

    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;

    const totalMonths =
        (currentYear - startYear) * 12 +
        (currentMonth - startMonth);

    if (totalMonths < 12) {
        return totalMonths <= 1
            ? "1 Month"
            : `${totalMonths} Months`;
    }

    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    if (remainingMonths === 0) {
        return years === 1 ? "1 Year" : `${years} Years`;
    }

    return `${years}y ${remainingMonths}m`;
};

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career and Volunteer History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2026 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
                      <h3 className="vertical-timeline-element-title">Software Engineer Intern <span className="work-duration">{getDuration(2026, 1)}</span> </h3>
                      <h4 className="vertical-timeline-element-subtitle">Company Name Withheld (Confidential)</h4>
                      <span className="timeline-location">Johannesburg, SA (Remote)</span>
            <p>
              Testing and debugging web applications to resolve critical issues before release. Developing and improving front-end features using modern web technologies (React, TypeScript, Angular, JavaScript , Git). Collaborating with team members to enhance code quality and development workflow.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faHandshakeAngle} />}
          >
                      <h3 className="vertical-timeline-element-title">Moderator Volunteer <span className="work-duration">{getDuration(2025, 2)}</span> </h3>
                      <h4 className="vertical-timeline-element-subtitle">Mettlestate</h4>
                      <span className="timeline-location">Sandton, SA (Remote)</span>
            <p>
                          Moderating and managing an online community by enforcing guidelines and resolving conflicts. Supporting events and maintaining consistent engagement. Improving response times and streamlining communication within the community.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
                      <h3 className="vertical-timeline-element-title">Freelance Full-Stack Developer <span className="work-duration">{getDuration(2023, 3)}</span> </h3>
                      <h4 className="vertical-timeline-element-subtitle">Nkosi-Codde's</h4> 
            <span className="timeline-location">South Africa (Remote)</span>
            <p>
              Designing and developing full-stack web applications using React, ASP.NET Core, Node.js, and SQL databases. Building projects including tournament management platforms, POS systems, and responsive web applications while improving problem-solving, API integration, authentication, and UI/UX development skills.
            </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2017-2021"
                      iconStyle={{
                          background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                      icon={<FontAwesomeIcon icon={faHandshakeAngle} />}
                  >
                      <h3 className="vertical-timeline-element-title">Media Volunteer <span className="work-duration">4 Years</span> </h3>
                      <h4 className="vertical-timeline-element-subtitle">Empower Church</h4>
                      <span className="timeline-location">Pretoria, SA (on-site)</span>
                      <p>
                          Managing live audio and visual setup for weekly services and events. Creating photo and video content for social media. Troubleshooting technical issues in real time to ensure smooth and uninterrupted operations.
                      </p> 
                  </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

