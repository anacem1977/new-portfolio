import React, {Component} from 'react';
import { Link } from "react-router-dom"

class WhereIveBeen extends Component {


render () {
    return (
        <div className="subtitle">
            <div className="where">
                <h3>Where I've been?</h3>
                <p>I have a major in Industrial Engineering from Tecnológico de Monterrey and I've worked for John Deere for a little over nineteen years at the Engines (Motores) facility located in Torreón, Coahuila, México with twelve years of experience in Product Engineering and Specifications and about seven years in Supply Management for major diesel engine components.</p>
                <p>During this time, I've also had the opportunity to participate in numerous projects such as SAP implementation, sunset of one of the engines that was produced at the factory, asset management and many more. →<Link to = "/resume" className="ga"> Résumé</Link></p>
                <p>Part of being curious is that I love learning new stuff: I'm <em>almost</em> level B1 in French, I have a Diploma on Data Science and I've decided to take a big turn in my careeer so, I recently finished the Software Engineering Immersive Reskilling Program (480 hours) with <a href="https://generalassemb.ly/" className="ga" target="_blank" rel="noreferrer">General Assembly</a> (they are awesome!) and I even completed a course for Agile Project Management in Coursera!</p>
            </div>
        </div>
        
    )
}
}

export default WhereIveBeen;