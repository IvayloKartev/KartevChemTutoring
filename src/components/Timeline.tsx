import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFlask, faFlaskVial, faStar, faBookOpen, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Most Important Achievements</h1>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - July"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faFlask} />}
          >
            <h3 className="vertical-timeline-element-title">MILSET Expo Europe 2024</h3>
            <h4 className="vertical-timeline-element-subtitle">Sarajevo, Bosnia and Herzegovina</h4>
            <p>
              Participated as a part of the Bulgarian delegation with my ZnS project
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - May"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faFlaskVial} />}
          >
            <h3 className="vertical-timeline-element-title">International Mendeleev Chemistry Olympiad</h3>
            <h4 className="vertical-timeline-element-subtitle">Shenzhen, China</h4>
            <p>
              Participated as a part of the Bulgarian national team, Honorary Diploma
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - April"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faStar} />}
          >
            <h3 className="vertical-timeline-element-title">Laureate of the National Olympiad</h3>
            <h4 className="vertical-timeline-element-subtitle">Gotse Delchev, Bulgaria</h4>
            <p>
              4th place in Senior National Ranking and Laureate title
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - December"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBookOpen} />}
          >
            <h3 className="vertical-timeline-element-title">Published paper in the Bulgarian Chemical Communications</h3>
            <h4 className="vertical-timeline-element-subtitle">Sofia, Bulgaria</h4>
            <p>
              "Investigation of ZnS-based phosphorescent materials, obtained by a modified method, including non-co-precipitation"
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - August"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faTrophy} />}
          >
            <h3 className="vertical-timeline-element-title">IYNT 2021</h3>
            <h4 className="vertical-timeline-element-subtitle">Tskneti, Georgia</h4>
            <p>
              Bronze medal as part of the Bulgarian national team in the International Young Naturalists Tournament
            </p>
          </VerticalTimelineElement>
          
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;