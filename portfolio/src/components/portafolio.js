import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

class Portafolio extends Component {


render () {
    return (
        <div className="subtitle">
        <div>
            <h3>Personal Portfolio</h3>
            <p>This was my very own project and the first one I completed by myself after the Reskilling Program was over: a Full Stack application with a Back End using my own database to capture the comments entered by the visitors and a Front End using React js and axios to make API requests to the databse I built.</p>
            
            <nav className="projectNav">
                <a href="https://github.com/anacem1977/new-portfolio-db" target="_blank" rel="noreferrer" className="projectLink">
                    Back End GitHub Repository
                </a>
                <a href="https://github.com/anacem1977/new-portfolio/tree/main/portfolio" target="_blank" rel="noreferrer" className="projectLink">
                    Front End GitHub Repository
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

export default Portafolio