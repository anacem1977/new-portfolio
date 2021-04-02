import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

class Nasa extends Component {


render () {
    return (
        <div className="subtitle">
            <div>
                <h3>NASA API</h3>
                <p>This was a team project (3 persons) and the goal was to build a web application using ReactJS and an API of our choice with a front-end that updated the UI and also made requests to a third-party API.</p>
                <p>From the options of API's that we were offered, we decided to use NASA's API which has tons of very interesting information and called the app "Mildly Interesting and Slightly Concerning (MISC) Space App".</p>
                <ul>
                    <li className="project">Use React Router to handle multiple views</li>
                    <li className="project">Communicate with the API and render the UI accordingly with the information received (using axios)</li>
                    <li className="project">Be deployed online to Surge</li>
                </ul>
                <nav className="projectNav">
                    <a href="https://github.com/anacem1977/Project3-NasaAPI" target="_blank" rel="noreferrer" className="projectLink">
                        GitHub Repository
                    </a>
                    <a href="https://project3-nasa.surge.sh/" target="_blank" rel="noreferrer" className="projectLink">
                        MISC Space App
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

export default Nasa