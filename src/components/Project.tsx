import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import mendeleev from '../assets/images/mendeleev.jpg';
import mendeleev1 from '../assets/images/mendeleev1.jpg';
import mendeleev2 from '../assets/images/mendeleev2.jpg';
import mendeleev3 from '../assets/images/mendeleev3.jpg';
import mendeleev4 from '../assets/images/mendeleev4.jpg';
import mendeleev5 from '../assets/images/mendeleev5.jpg';
import expo from '../assets/images/expo.jpg';
import bnt from '../assets/images/bnt.png';

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Gallery</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mendeleev5} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>During the IMChO</h2></a>
                <p>May, 2024, Shenzhen, China</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={mendeleev3} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>After the IMChO</h2></a>
                <p>Airport photo together with the Bulgarian National Chemistry Team</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={expo} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>At MILSET EXPO Europe 2024</h2></a>
                <p>With my project about ZnS (described in detail in my second paper, in BCC)</p>
            </div>
            <div className="project">
                <a href="#" target="_blank" rel="noreferrer"><img src={bnt} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="#" target="_blank" rel="noreferrer"><h2>In the Bulgarian National Television</h2></a>
                <p>Program, featuring the success of the Bulgarian National team</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;