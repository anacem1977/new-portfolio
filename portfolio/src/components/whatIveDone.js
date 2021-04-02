import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

class WhatIveDone extends Component {


render () {
    return (
        <div className="subtitle">
            <div>
                <h3>What I've done?</h3>
                <p>I'm still learning, but here are some of the projects I did while attending the Software Engineering Immersive Reskilling program.</p>

                <div className="resp">
                    <div className="gallery">
                        <Link to = "/trivia">
                            <img src="https://i.imgur.com/3uv4Hpg.png" alt="trivia game" width="350vw"/>
                        </Link>
                        <div className="description">Trivia Game</div>
                    </div>
                </div>

                <div className="resp">
                    <div className="gallery">
                        <Link to = "/home">
                            <img src="https://i.imgur.com/3uv4Hpg.png" alt="nasa" width="320vw"/>
                        </Link>
                        <div className="description">NASA</div>
                    </div>
                </div>

                <div className="resp">
                    <div className="gallery">
                        <Link to = "/home">
                            <img src="https://i.imgur.com/3uv4Hpg.png" alt="beer encyclopedia" width="320vw"/>
                        </Link>
                        <div className="description">Beer Encyclopedia</div>
                    </div>
                </div>
                
                <div className="clear"></div>

                <p>After finishing the program, I've continued learning and practicing my skills, so you can click here →<a href="https://www.hackerrank.com/anace_m" target="_blank" rel="noreferrer" className="faIcon"><FontAwesomeIcon icon={['fab', 'hackerrank']}></FontAwesomeIcon></a> to see the badges and certifications I've received on Hacker Rank so far.</p>
            </div>

        </div>
        
    )
}
}

export default WhatIveDone