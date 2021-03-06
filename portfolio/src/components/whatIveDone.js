import React, {Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"

class WhatIveDone extends Component {


render () {
    return (
        <div className="subtitle">
            <div>
                <h3>What I've done?</h3>
                <p>I'm still learning, but here are some of the projects I did while attending the Software Engineering Immersive Reskilling program, including the portfolio you're checking out right now!</p>

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
                        <Link to = "/nasa">
                            <img src="https://i.imgur.com/k2EHVzv.png?1" alt="nasa" width="350vw"/>
                        </Link>
                        <div className="description">MISC Space App</div>
                    </div>
                </div>

                <div className="resp">
                    <div className="gallery">
                        <Link to = "/beer">
                            <img src="https://i.imgur.com/CbR7JX4.png?1" alt="beer encyclopedia" width="350vw"/>
                        </Link>
                        <div className="description">Beer Encyclopedia</div>
                    </div>
                </div>

                <div className="resp">
                    <div className="gallery">
                        <Link to = "/portfolio">
                            <img src="https://i.imgur.com/3E6tBqe.png?1" alt="portfolio" width="350vw"/>
                        </Link>
                        <div className="description">Portfolio</div>
                    </div>
                </div>
                
                <div className="clear"></div>

                <p>After finishing the program, I've continued learning and practicing my skills: below are a few smaller projects I've worked on for interviews and you could also click here ??? <space> </space>
                    <a href="https://www.hackerrank.com/anace_m" target="_blank" rel="noreferrer" className="faIcon">
                        <FontAwesomeIcon icon={['fab', 'hackerrank']}></FontAwesomeIcon>
                    </a> 
                    <space> </space>
                    and here ??? <space> </space>
                    <a href="https://www.codecademy.com/users/anacem1977/achievements" target="_blank" rel="noreferrer" className="faIcon">
                        <FontAwesomeIcon icon="code"></FontAwesomeIcon>
                    </a>
                    <space> </space>to see the badges and certifications I've received on Hacker Rank and codecademy so far.</p>

                    <div className="resp">
                    <div className="gallery">
                        <Link to = "/weather">
                            <img src="https://i.imgur.com/BE8mIML.png?1" alt="weather" width="350vw"/>
                        </Link>
                        <div className="description">Weather App</div>
                    </div>
                </div>

                <div className="resp">
                    <div className="gallery">
                        <Link to = "/chat">
                            <img src="https://i.imgur.com/4lIz6B4.png?1" alt="chat" width="350vw"/>
                        </Link>
                        <div className="description">ChatBot sim</div>
                    </div>
                </div>

                {/* <div className="resp">
                    <div className="gallery">
                        <Link to = "/beer">
                            <img src="https://i.imgur.com/CbR7JX4.png?1" alt="beer encyclopedia" width="350vw"/>
                        </Link>
                        <div className="description">Beer Encyclopedia</div>
                    </div>
                </div>

                <div className="resp">
                    <div className="gallery">
                        <Link to = "/portfolio">
                            <img src="https://i.imgur.com/3E6tBqe.png?1" alt="portfolio" width="350vw"/>
                        </Link>
                        <div className="description">Portfolio</div>
                    </div>
                </div> */}
                
                <div className="clear"></div>

            </div>

        </div>
        
    )
}
}

export default WhatIveDone