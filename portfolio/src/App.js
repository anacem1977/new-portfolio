import './App.css';
import react, {Component} from "react"
import { Route, Link } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {fab} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

import Home from "./components/homePage"
import WhoAmI from "./components/whoAmI"
import WhereIveBeen from "./components/whereIveBeen"
import WhatIveDone from "./components/whatIveDone"
import WhereImGoing from "./components/whereImGoing"
import FunFacts from "./components/funFacts"

library.add(fab, faEnvelope)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, {passive: true})
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll)
  }
  
  handleScroll = (event) => {
    this.setState ({
      scroll: event.path[1].scrollY
    })
    console.log(this.state.scroll)
  }

  render( ) {
    return (
      <div className="App" handleScroll={this.hanldeScroll}>
        <section className="topColor">
          <nav className="horizontal">
            <Link to ="/">Home</Link>
            <Link to = "/who">Who am I?</Link>
            <Link to = "/where">Where I've been?</Link>
            <Link to = "/what">What I've done?</Link>
            <Link to = "/going">Where I'm going?</Link>
            <Link to = "/fun">Fun Facts</Link>
            <Link to = "/contact">Contact</Link>
          </nav>
        </section>

        {this.state.scroll < 10 ?
          <section className="topColorFull">
            <p className="menu">Menu</p>
          </section>
          : 
          <section className="topColorBack">
            <p className="menu">Menu</p>
          </section>
      }

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

        <div>
            <p className="scroll"> ← scroll</p>
        </div>
        
        <Route exact path="/" render= {(props) => ( <Home/>)} /> 

        <Route path="/who" render= {(props) => ( <WhoAmI/>)} />

      </div>
      
    )
  }
} 

export default App;
