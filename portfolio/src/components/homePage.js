import React, {Component} from 'react';

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
                {this.state.change === true ? <h1 onMouseEnter={this.handleEnglish} className="msg">&lt; HELLO &gt;</h1> : <h1 onMouseEnter={this.handleSpanish} className="msg">&lt; HOLA &gt;</h1> }
                <div className="square"></div>
            </div>

            <div className="intro">
                <hr></hr>
                <p>With almost 20 years of successful experience in the Manufacturing indsutry. Recognized consistently for performance excellence and contributions to success. Enthusiastic and eager to contribute through hard work, attention to detail and excellent organizational skills. Motivated to learn, grow and excel.</p>
            </div>

        </div>
        
    )
}
}

export default Home