import React, {Component} from 'react';
import { Route, Link } from "react-router-dom"

import WhoAmI from "./whoAmI"
import WhereIveBeen from "./whereIveBeen"
import WhatIveDone from "./whatIveDone"
import WhereImGoing from "./whereImGoing"
import FunFacts from "./funFacts"

class Home extends Component {
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

render () {
    return (
        <div className="subtitle">

            <div className="hello">
                {this.state.change === true ? <h1 onMouseEnter={this.handleEnglish} className="msg">HELLO</h1> : <h1 onMouseEnter={this.handleSpanish} className="msg">HOLA</h1> }
                <div className="square"></div>
            </div>

            <div className="intro">
                <p>With almost 20 years of successful experience in the Manufacturing indsutry. Recognized consistently for performance excellence and contributions to success. Enthusiastic and eager to contribute through hard work, attention to detail and excellent organizational skills. Motivated to learn, grow and excel.</p>
                <br></br>
                <hr></hr>
            </div>

        <Route exact path="/" render= {(props) => ( <WhereIveBeen/>)} />

        <Route exact path="/" render= {(props) => ( <WhatIveDone/>)} />

        <Route exact path="/" render= {(props) => ( <WhereImGoing/>)} />

        <Route exact path="/" render= {(props) => ( <FunFacts/>)} />

        </div>
        
    )
}
}

export default Home