import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

class Beer extends Component {


render () {
    return (
        <div className="subtitle">
            <div>
                <h3>Beer Encyclopedia</h3>
                <p>This was the final project for the program to be done individually: a Full Stack application with a Back End using express js and my own database (postrgeSQL and sequelize) and a Front End using React js and axios to make API requests to the databse I built.</p>
                <p>At least one of the components should've had full CRUD and use at least one technology that wasn't taught in class:</p>
                <ul>
                    <li className="project">Be a complete product</li>
                    <li className="project">Two separate GitHub repositories for the Back and Front Ends</li>
                    <li className="project">Be deployed online to Heroku (Back End) and Surge (Front End)</li>
                </ul>
                <nav className="projectNav">
                    <a href="https://github.com/anacem1977/SEI-Project4-BackEnd" target="_blank" rel="noreferrer" className="projectLink">
                        Back End GitHub Repository
                    </a>
                    <a href="https://github.com/anacem1977/SEI-Project4-FrontEnd" target="_blank" rel="noreferrer" className="projectLink">
                        Front End GitHub Repository
                    </a>
                    <a href="https://beer-encyclopaedia.surge.sh/" target="_blank" rel="noreferrer" className="projectLink">
                        Beer Encyclopedia
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

export default Beer