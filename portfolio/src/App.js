import './App.css';
import react, {Component} from "react"
import { Route, Link } from "react-router-dom"
import axios from "axios";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {fab} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope, faHandPointLeft, faDatabase, faCommentDots, faCode} from "@fortawesome/free-solid-svg-icons"

import Home from "./components/homePage"
import WhoAmI from "./components/whoAmI"
import WhereIveBeen from "./components/whereIveBeen"
import WhatIveDone from "./components/whatIveDone"
import WhereImGoing from "./components/whereImGoing"
import FunFacts from "./components/funFacts"
import Resume from "./components/resume"
import Trivia from "./components/trivia"
import Nasa from "./components/nasa"
import Beer from "./components/beer"
import Contact from "./components/contact"
import Comment from "./components/commentsForm"
import Portafolio from "./components/portafolio"
import Weather from "./components/weather"

library.add(fab, faEnvelope, faHandPointLeft, faDatabase, faCommentDots, faCode)

class App extends Component {

  render( ) {
    return (
      <div className="App" handleScroll={this.hanldeScroll}>
        <section className="topColor">
          <nav className="horizontalFirst">
            <Link to ="/" className="topLink">Home</Link>
            <Link to = "/who" className="topLink">Who am I?</Link>
            <Link to = "/where" className="topLink">Where I've been?</Link>
            <Link to = "/what" className="topLink">What I've done?</Link>
            <Link to = "/going" className="topLink">Where I'm going?</Link>
          </nav>
          <nav className="horizontalSecond">
            <Link to = "/fun" className="topLink">Fun Facts</Link>
            <Link to = "/contact" className="topLink">Contact</Link>
          </nav>
        </section>

       <nav className="vertical">
          <a href="https://www.linkedin.com/in/ana-cecilia-maldonado-cervantes-a146161ba" target= "_blank" rel="noreferrer" className="faIcon">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"></FontAwesomeIcon>
          </a>
          <p></p>
          <a href="https://wa.me/528712117641" target="_blank" rel="noreferrer" className="faIcon">
            <FontAwesomeIcon icon={['fab', 'whatsapp-square']} size="2x"></FontAwesomeIcon>
          </a>
          <p></p>
          <a href="https://github.com/anacem1977" target= "_blank" rel="noreferrer" className="faIcon">
            <FontAwesomeIcon icon={['fab', 'github']} size="2x"></FontAwesomeIcon>
          </a>
          <p></p>
          <a href="mailto:anace_m@yahoo.com" className="faIcon">
            <FontAwesomeIcon icon="envelope" size="2x"></FontAwesomeIcon>
          </a>
        </nav>
        
        <Route exact path="/" render= {(props) => ( <Home/>)} /> 
        <Route path="/who" render= {(props) => ( <WhoAmI/>)} />
        <Route path="/where" render= {(props) => ( <WhereIveBeen/>)} />
        <Route path="/what" render= {(props) => ( <WhatIveDone/>)} />
        <Route path="/going" render= {(props) => ( <WhereImGoing/>)} />
        <Route path="/fun" render= {(props) => ( <FunFacts/>)} />
        <Route path="/resume" render= {(props) => ( <Resume/>)} />
        <Route path="/trivia" render= {(props) => ( <Trivia/>)} />
        <Route path="/nasa" render= {(props) => ( <Nasa/>)} />
        <Route path="/beer" render= {(props) => ( <Beer/>)} />
        <Route path="/portfolio" render= {(props) => ( <Portafolio/>)} />
        <Route path="/weather" render= {(props) => ( <Weather/>)} />
        <Route path="/contact" render= {(props) => ( <Contact/>)} />
        <Route path="/comment" render= {(props) => ( <Comment/>)} />

      </div>
      
    )
  }
} 

export default App;
