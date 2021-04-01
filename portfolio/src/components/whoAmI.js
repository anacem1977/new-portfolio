import React, {Component} from 'react';

class WhoAmI extends Component {

render () {
    return (
        <div className="subtitle">
            <div>
                <h3>Who Am I?</h3>
                <div className="container">
                    <img src="https://i.imgur.com/KG7rR5f.jpg" alt="me" className="myPic"/>
                    <p className="me">My name is Ana Cecilia (pronouns she/her). I'm a mother and a wife, kind of crazy, a little bit of a rebel and curious about how everything works. Native Spanish speaker and fluent in English.</p>
                </div>
            </div>
        </div>
    )
}
}

export default WhoAmI