import React from 'react';
import './App.css';
import react, { Component } from "react"
import animate__animated from "animate.css"
import TextLoop from "react-text-loop"

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {

    } 
  }

  render( ) {
    return (
      <div className="App">
        <section className="animate__animated animate__fadeInDown animate__delay-3s">
            <p>Menu</p>
        </section>
        <div>
          <TextLoop interval={[3000]}>
              <h1><span className="animate__animate animate__bounce">HELLO</span></h1>
              <h1><span>HOLA.</span></h1>
            </TextLoop>
        </div>
      </div>
    )
  }
} 

export default App;
