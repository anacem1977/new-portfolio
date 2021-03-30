import './App.css';
import react, {Component} from "react"
import animate__animated from "animate.css"
import { Link, Route } from "react-router-dom"
import WhoAmI from "./components/whoAmI"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: true,
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
  
  handleScroll(event) {
    console.log("scrolling")
    console.log(event.path[1].scrollY)
  }
  

  render( ) {
    return (
      <div className="App" handleScroll={this.hanldeScroll}>
        <section className="animate__animated animate__fadeInDown animate__delay-1s">
            <p>Menu</p>
        </section>
        <div>
            {this.state.change === true ? <h1 onMouseEnter={this.handleEnglish} className="animate__animated animate__swing">HELLO</h1> : <h1 onMouseEnter={this.handleSpanish} className="animate__animated animate__bounce">HOLA</h1> }
        </div>
        <div>
            <Link to ="/">scroll 👇🏻</Link>
        </div>

        <Route path="/" render= {(props) => ( <WhoAmI/>)} />

      </div>
    )
  }
} 

export default App;
