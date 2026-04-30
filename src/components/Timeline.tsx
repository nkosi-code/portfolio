import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

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
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
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
            <h3 className="vertical-timeline-element-title">Moderator Volunteer</h3>
                      <h4 className="vertical-timeline-element-subtitle">Mettlestate</h4>
                      <span className="timeline-location">Sandton, SA (Remote)</span>
            <p>
                          Moderating and managing an online community by enforcing guidelines and resolving conflicts. Supporting events and maintaining consistent engagement. Improving response times and streamlining communication within the community.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Self-Directed Learning</h3>
            <span className="timeline-location">Cape Town, SA</span>
            <p>
              Completing self-directed learning in programming and problem-solving. Building discipline through structured goal-setting and consistence. Achieving intermediate proficiency in Spanish.
            </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement
                      className="vertical-timeline-element--work"
                      date="2017-2021"
                      iconStyle={{
                          background: '#5000ca', color: 'rgb(39, 40, 34)' }}
                      icon={<FontAwesomeIcon icon={faHandshakeAngle} />}
                  >
                      <h3 className="vertical-timeline-element-title">Media Volunteer (Photography & Sound)</h3>
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
