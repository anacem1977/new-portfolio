import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

class Weather extends Component {


render () {
    return (
        <div className="subtitle">
            <div>
                <h3>Weather App</h3>
                <p>This was was a task for a company that I was interviewing with, and the goal was to create a React app using Open Weather Map API to retrieve current and forecasted weather conditions for any given location.</p>
                <p>It should include an array of predetermined cities as well as the ability to add new locations and navigate through them.</p>
                <nav className="projectNav">
                    <a href="https://github.com/anacem1977/weather-app" target="_blank" rel="noreferrer" className="projectLink">
                        GitHub Repository
                    </a>
                    <a href="https://acc-weather-app.surge.sh/" target="_blank" rel="noreferrer" className="projectLink">
                        Weather App
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

export default Weather