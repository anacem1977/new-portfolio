import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class WhatIveDone extends Component {


render () {
    return (
        <div className="subtitle">
            <div>
                <h3>What I've done?</h3>
                <p>I'm still learning, but here are the links to the projects I did while attending the Software Engineering Reskilling program by General Assembly.</p>
                <p>After finishing the program, I've continued learning and practicing my skills, so you can click here →<a href="https://www.hackerrank.com/anace_m" target="_blank" rel="noreferrer" className="faIcon"><FontAwesomeIcon icon={['fab', 'hackerrank']}></FontAwesomeIcon></a> to see the badges and certifications I've received on Hacker Rank so far.</p>
            </div>

        </div>
        
    )
}
}

export default WhatIveDone