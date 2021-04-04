import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import animate__animated from "animate.css"

class WhereImGoing extends Component {


render () {
    return (
        <div className="subtitle">
            <div>
                <h3>Where I'm going?</h3>
                <p>I'd very much like to start a full-time career in Software Engineering working remotely for an awesome company: I enjoy very much working with Front-End web development and frameworks (HTML, CSS, JavaScript, React, Bootstrap), but I can also build Full Stack Applications (Express, node js, PostgreSQL) and I love coding with Python!</p>
            </div>

            <div className="icons">
                <FontAwesomeIcon icon={['fab', 'github']} size="5x" className="showIcons animate__animated animate__rotateInDownLeft animate__delay-4s"></FontAwesomeIcon>
                <FontAwesomeIcon icon="database" size="5x" className="showIcons animate__animated animate__rotateInDownLeft animate__delay-3s"></FontAwesomeIcon>
                <FontAwesomeIcon icon={['fab', 'react']} size="5x" className="showIcons animate__animated animate__rotateInDownLeft animate__delay-2s"></FontAwesomeIcon>
                <FontAwesomeIcon icon={['fab', 'html5']} size="5x" className="showIcons animate__animated animate__rotateInDownLeft animate__delay-1s"></FontAwesomeIcon>

                <FontAwesomeIcon icon={['fab', 'js']} size="5x" className="showIcons animate__animated animate__tada"></FontAwesomeIcon>
                
                <FontAwesomeIcon icon={['fab', 'css3']} size="5x" className="showIcons animate__animated animate__rotateInDownRight animate__delay-1s"></FontAwesomeIcon>
                <FontAwesomeIcon icon={['fab', 'bootstrap']} size="5x" className="showIcons animate__animated animate__rotateInDownRight animate__delay-2s"></FontAwesomeIcon>
                <FontAwesomeIcon icon={['fab', 'node-js']} size="5x" className="showIcons animate__animated animate__rotateInDownRight animate__delay-3s"></FontAwesomeIcon>
                <FontAwesomeIcon icon={['fab', 'python']} size="5x" className="showIcons animate__animated animate__rotateInDownRight animate__delay-4s"></FontAwesomeIcon>
            </div>

        </div>
        
    )
}
}

export default WhereImGoing