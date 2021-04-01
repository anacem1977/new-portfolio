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

  handleHide = (event) => {
    if (this.state.scroll > 10) {
      event.target.style.display = "none"
    }
  }

  handleShow = (event) => {
    console.log(event.target)
    if (this.state.scroll < 200) {
      event.target.style.display = "none"
    }
  }

  render( ) {
    return (
      <div className="App" handleScroll={this.hanldeScroll}>
        <section className="topColor">
          <p className="menu">Menu</p>
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
       
       <nav>
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

        <div className="hello">
          {this.state.change === true ? <h1 onMouseEnter={this.handleEnglish} className="msg">HELLO</h1> : <h1 onMouseEnter={this.handleSpanish} className="msg">HOLA</h1> }
          <div className="square"></div>
        </div>

        <div>
            <p className="scroll"> ← scroll</p>
        </div>
        
        <Route path="/" render= {(props) => ( <WhoAmI handleShow={this.handleShow} scroll={this.state.scroll}/>)} />

        <Route path="/" render= {(props) => ( <WhereIveBeen/>)} />

        <Route path="/" render= {(props) => ( <WhatIveDone/>)} />

        <Route path="/" render= {(props) => ( <WhereImGoing/>)} />

        <Route path="/" render= {(props) => ( <FunFacts/>)} />

      </div>
    )
  }
} 

export default App;
