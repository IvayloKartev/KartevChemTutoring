import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';

import { faFlask, faAtom, faSchool } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Titration",
    "Theoretical Background",
    "Kinetical Reactions",
    "Inorganic synthesis",
    "Organic synthesis",
];

const labelsSecond = [
    "Homework solving",
    "Olympiad preparation",
    "Exam preparation",
    "Concept explanation",
    "Useful tips"
];

const labelsThird = [
    "Clarification",
    "Explanation of own research",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>My best fields</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faFlask} size="3x"/>
                    <h3>Experimental Chemistry</h3>
                    <p>I have experience in working in professional lab and have conducted my own experimental research. Therefore, I can offer tips and help with practically-oriented problems. Published two chemistry papers - in Bulgarian Chemical Communcations and Journal of Natural Science and Education</p>
                    <div className="flex-chips">
                        <span className="chip-title">I can teach you:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faSchool} size="3x"/>
                    <h3>Tutoring</h3>
                    <p>Having grounded a chemistry academy at my school, I have expereince in explaining in a clear, though engaging way concepts and problems, difficult for most students. </p>
                    <div className="flex-chips">
                        <span className="chip-title">I can help in:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAtom} size="3x"/>
                    <h3>Physical & Inorganic Chemistry</h3>
                    <p>Having conducted my own research in this field, I can offer my help in explaining sophisticated topics. I also offer explanation of my own research activity. I should not be underestimated as an organic chemist, though.</p>
                    <div className="flex-chips">
                        <span className="chip-title">I offer:</span>
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