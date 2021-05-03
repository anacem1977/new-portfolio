import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

class Chat extends Component {


render () {
    return (
        <div className="subtitle">
            <div>
                <h3>ChatBot Simulator</h3>
                <p>This was too a task for another company I was interviewing with: A Chat-like form built with independent components for Name, Date of Birth and Contact. When the user enters the requested information, it is shown inside a pink frame.</p>
                <p>Once all the data is captured, a button to "Start" is displayed along with all the information that was captured throughout the components. Random photos of users are retrieved via API and displayed to simulate a real chat. A functional progress bar was included as well.</p>
                <nav className="projectNav">
                    <a href="https://github.com/anacem1977/ali-mx-challenge" target="_blank" rel="noreferrer" className="projectLink">
                        GitHub Repository
                    </a>
                    <a href="https://main.d3ksdv2ognd5pb.amplifyapp.com/" target="_blank" rel="noreferrer" className="projectLink">
                        ChatBot
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

export default Chat