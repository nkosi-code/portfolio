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
              Software Testing & Debugging, Web Development, Observation, Information, Problem-Solving 
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
              Community Management, Communication, Conflict Resolution, Event Support, Time Management, Discord Moderation
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Personal Goal Pursuit</h3>
            <span className="timeline-location">Cape Town, SA</span>
            <p>
              Strategic Thinking, Coaching & Mentoring, Discipline & Consistency, Time Management, Spanish (Intermediate) 
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
                          Event Photography, Live Service Coverage, Social Media Content Creation, Live Sound Mixing, Audio Setup & Troubleshooting, Microphone & Equipment Management, Stage Lighting & Visual Coordination, Projector Operation
                      </p> 
                  </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
