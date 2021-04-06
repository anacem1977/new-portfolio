import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

class Contact extends Component {


render () {
    return (
        <div className="subtitle">
            <div>
                <h3>Contact</h3>
                <p>I am currently living in Torreón, Coahuila, México and open to travel as needed but unable to relocate.</p>

                <ul>
                    <li className="project">Phone: +52 871 211-7641</li>
                    <li className="project">e-mail: anace_m@yahoo.com</li>
                    <li className="project">
                        <a href="https://www.linkedin.com/in/ana-cecilia-maldonado-cervantes-a146161ba" target="_blank" rel="noreferrer" className="ga">LinkedIn</a>
                    </li>
                    <li className="project">
                        <a href="https://github.com/anacem1977" target="_blank" rel="noreferrer" className="ga">GitHub</a>
                    </li>
                </ul>

                <p>I hope you enjoyed taking a peek at my recent work and newly learned skills and expect to hear back from you soon! Feel free to leave any comments or suggestions you have for me → 
                    <space> </space>
                    <Link to = "/comment" className="faIcon">
                        <FontAwesomeIcon icon="comment-dots"></FontAwesomeIcon>
                    </Link>
                </p>

            </div>
        </div> 
    )
}
}

export default Contact