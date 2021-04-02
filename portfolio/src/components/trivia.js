import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

class Trivia extends Component {


render () {
    return (
        <div className="subtitle">
            <div>
                <h3>Trivia Game</h3>
                <p>This was the very first project I worked on, completed after only four weeks of attending the Software Engineering Immersive Reskilling program.</p>
                <p>The goal was to individually create a familiar game using HTML, CSS and JavaScript only, for which I chose to do a multiple choice question game about México. The game must:</p>
                <ul>
                    <li className="project">Render in the browser</li>
                    <li className="project">Include separate HTML / CSS / JavaScript files</li>
                    <li className="project">Use Javascript for DOM manipulation</li>
                    <li className="project">Be deployed online using Github Project pages</li>
                </ul>
                <nav className="projectNav">
                    <a href="https://github.com/anacem1977/SEI-Project1" target="_blank" rel="noreferrer" className="projectLink">
                        GitHub Repository
                    </a>
                    <a href="https://anacem1977.github.io/" target="_blank" rel="noreferrer" className="projectLink">
                        Trivia Game App
                    </a>
                </nav>
                <Link to = "/what" className="faIcon">
                    <FontAwesomeIcon icon="hand-point-left" size="3x"></FontAwesomeIcon>
                </Link>
            </div>

        </div>
        
    )
}
}

export default Trivia