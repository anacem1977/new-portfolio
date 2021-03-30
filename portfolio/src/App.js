import './App.css';
import react, {Component} from "react"
import animate__animated from "animate.css"
import { Route } from "react-router-dom"
import WhoAmI from "./components/whoAmI"
import WhereIveBeen from "./components/whereIveBeen"
import WhatIveDone from "./components/whatIveDone"

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
        <div className="hola">
            {this.state.change === true ? <h1 onMouseEnter={this.handleEnglish} className="animate__animated animate__swing msg">HELLO</h1> : <h1 onMouseEnter={this.handleSpanish} className="animate__animated animate__bounce msg">HOLA</h1> }
        </div>
        <div>
            <p className="scroll"> ← scroll</p>
        </div>
        
        <Route path="/" render= {(props) => ( <WhoAmI/>)} />

        <Route path="/" render= {(props) => ( <WhereIveBeen/>)} />

        <Route path="/" render= {(props) => ( <WhatIveDone/>)} />

      </div>
    )
  }
} 

export default App;
