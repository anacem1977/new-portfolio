import './App.css';
import react, {Component} from "react"
import animate__animated from "animate.css"
import { Route } from "react-router-dom"
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {fab} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

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
      change: true,
      scroll: 0
    }
  }

  handleEnglish = (event) => {
    this.setState({
      change:false
    })
  }

  handleSpanish = (event) => {
    this.setState({
      change:true
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, {passive: true})
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll)
  }
  
  handleScroll = (event) => {
    console.log("scrolling")
    this.setState ({
      scroll: event.path[1].scrollY
    })
    console.log(this.state.scroll)
  }

  render( ) {
    return (
      <div className="App" handleScroll={this.hanldeScroll}>
        <section className="animate__animated animate__fadeInDown animate__delay-1s">
            <p>Menu</p>
        </section>

        <nav>
          <p><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"></FontAwesomeIcon></p>
          <p><FontAwesomeIcon icon={['fab', 'facebook-messenger']} size="2x"></FontAwesomeIcon></p>
          <p> <FontAwesomeIcon icon={['fab', 'github']} size="2x"></FontAwesomeIcon></p>
          <p><FontAwesomeIcon icon="envelope" size="2x"></FontAwesomeIcon></p>
        </nav>

        <div className="hola">
            {this.state.change === true ? <h1 onMouseEnter={this.handleEnglish} className="animate__animated animate__swing msg">HELLO</h1> : <h1 onMouseEnter={this.handleSpanish} className="animate__animated animate__bounce msg">HOLA</h1> }
           
        </div>

        <div>
            <p className="scroll"> ← scroll</p>
        </div>
        
        <Route path="/" render= {(props) => ( <WhoAmI/>)} />

        <Route path="/" render= {(props) => ( <WhereIveBeen/>)} />

        <Route path="/" render= {(props) => ( <WhatIveDone/>)} />

        <Route path="/" render= {(props) => ( <WhereImGoing/>)} />

        <Route path="/" render= {(props) => ( <FunFacts/>)} />

      </div>
    )
  }
} 

export default App;
