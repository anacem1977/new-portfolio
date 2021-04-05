import React, {Component} from 'react';
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {
            diploma: false,
            certificate: false
        }
    }

showDiploma = () => {
    this.setState ({
        diploma: !this.state.diploma
    })
}

hideDiploma = () => {
    this.setState ({
        diploma: false
    })
}

showCertificate = () => {
    this.setState ({
        certificate: !this.state.certificate
    })
}

hideCertificate = () => {
    this.setState ({
        certificate: false
    })
}

render () {
    return (
        <div >
            <div className="subtitle resume">

                <h3>ANA CECILIA MALDONADO CERVANTES</h3>

                <nav className="horizontal">
                    <a href="#workhistory" className="localLink">Work History</a>
                    <a href="#education" className="localLink">Education</a>
                    <a href="#skills" className="localLink">Skills</a>
                    <a href="#language" className="localLink">Languages</a>
                    <a href="#other" className="localLink">Other</a>
                    <Link to = "/where" className="faIcon">
                    <FontAwesomeIcon icon="hand-point-left" size="2x"></FontAwesomeIcon>
                </Link>
                </nav>
                
                <h5>Global Planning Lead - John Deere Power Systems</h5>
                <p><b>Jun 2013 to Oct 2020</b></p>
                <ul>
                    <li>Responsible for managing the global sourcing for Cylinder Blocks, Heads and Crankshafts for all John Deere Power Systems Engine Factories through the identification and management of short, mid and long term issues and projects.</li>
                    <li>Asset reduction project through management of MRP parameters.</li>
                </ul>
                
                <h5>S250 Engine Sunset Project - Motores John Deere</h5>
                <p><b>Jan to Dec 2013</b></p>
                <ul>
                    <li>Responsible for coordinating the end of production of the S250 engine by working along with Marketing, Production Planning, Purchasing and Specifications departments to minimize raw material obsolescence and ensure all customer requirements were met considering potential  needs for service in the following years.</li>
                </ul>
                
                <h5>Sr. Engineer, Product Engineering and Specs - Motores John Deere</h5>
                <p><b>Nov 2010 to May 2013</b></p>
                <ul>
                    <li>Manager to the local Product Engineering and Specifications department ensuring to maintain work standards, adhere to timelines and meet quality assurance targets during the implementation of Engineering Changes on all engine production lines.</li>
                    <li>Focus on decision making, special projects and budget management.</li>
                </ul>
                
                <h5>Right Lead Time Project - John Deere Power Systems</h5>
                <p><b>Jan to Nov 2010</b></p>
                <ul>
                    <li>Lead the RLT project by facilitating and managing a multi-cultural and cross-functional team to determine the appropriate lead time for the enngines by considering factors such as supply chain, manufacturing complexity, order frequency, etc.</li>
                </ul>
                
                <h5>Product Engineering and Specifications - Motores John Deere</h5>
                <p><b>Oct 2001 to Dec 2009</b></p>
                <ul>
                    <li id="education">Held several positions of increasing responsibility such as coordination of implementation of engineering changes for current and new engine applications.</li>
                    <li>PDP Module representative for the SAP Implementation.</li>
                    <li>Supervisor for Specifications Analysts.</li>
                </ul>
                <hr></hr>
                <h5>Education</h5>
                <div className="resumeContainer">
                    <div className="text">
                        <h5>Certificate: Software Engineering</h5>
                        <p><b>General Assembly - Online. March 2021</b></p>
                        <ul>
                            <li>Engineering Immersive Reskilling Program</li>
                            <li>Front End Web Development, Full Stack Development, Front End Framework and Native Python.</li>
                        </ul>
                    </div>
                    
                    {this.state.certificate ? 
                        <div className="modalCertificate fade" role="dialog" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-footer">
                                    <button type="button" className="btnSmall" data-dismiss="modal" onClick={this.hideCertificate}>
                                        Close
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src="https://i.imgur.com/Ikf3ftx.png" alt="certificate" className="certificateFull"/>
                                </div>
                        </div>
                    </div>   
                    :  
                        <div className="resumePic">
                            <button onClick={this.showCertificate} className="show">
                                <img src="https://i.imgur.com/Ikf3ftx.png" alt="certificate" className="certificate" />
                            </button>
                        </div>
                    }
                
                    <div className="text">
                        <h5>Diploma: Data Science</h5>
                        <p><b>Tec de Monterrey - Online. January 2021</b></p>
                        <ul>
                            <li>Data Science: Decision Making with Predictive Analysis</li>
                        </ul>
                    </div>
                  
                    {this.state.diploma ? 
                        <div className="modalDiploma fade" role="dialog" id="myModal">
                            <div className="modal-dialog">
                                <div className="modal-footer">
                                    <button type="button" className="btnSmall" data-dismiss="modal" onClick={this.hideDiploma}>
                                        Close
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <img src="https://i.imgur.com/fMyFFJC.png" alt="diploma" className="diplomaFull"/>
                                </div>
                        </div>
                    </div>   
                    :  
                        <div className="resumePic">
                            <button onClick={this.showDiploma} className="show">
                                <img src="https://i.imgur.com/fMyFFJC.png" alt="diploma" className="certificate" />
                            </button>
                        </div>
                    }

                </div>
                
                <h5>Bachelor's Degree: Industrial and Systems Engineering</h5>
                <p><b>Tec de Monterrey - Monterrey, N.L., MEX. 1999</b></p>
                <hr></hr>
                <h5 id="skills">Skills</h5>
                    <ul>
                        <li>Leading without authority</li>
                        <li>Leadership</li>
                        <li>Communication</li>
                        <li>Analysis</li>
                        <li>Planning</li>
                        <li>Decision Making</li>
                    </ul>
                <hr></hr>
                <h5 id="language">Languages</h5>
                    <ul>
                        <li>English: Professional</li>
                        <li>French: Student level A3</li>
                    </ul>
                <hr></hr>
                <h5 id="other">Other</h5>
                    <ul>
                        <li>Volunteering activities: serving dinners at local hospital for patients' relatives, donation of full year's scholarship for girls at risk situation, Christmas' activities for several local non-profit organizations.</li>
                        <li>Participation in Mentoring program at Tec de Monterrey for undergraduates.</li>
                    </ul>
                    <hr></hr>
            </div>
            <div>
                <p className="scroll"> ← scroll</p>
                <a href="#top" className="backToTop"> top →</a>
            </div>
        </div>
        
    )
}
}

export default Resume