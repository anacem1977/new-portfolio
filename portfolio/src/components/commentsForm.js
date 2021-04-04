import React, {Component} from 'react';

class Comment extends Component {

render () {
    return (
        <div className="subtitle">
            <form>
                <div className="formContainer">
                    <input type="text" id="name" name="name" placeholder="Your name" autofocus required></input>
                    <input type="email" id="email" name="email" placeholder="Your e-mail" required></input>
                </div>
                <br></br>
                <textarea name="comment" id="comment" placeholder="Feedback" required></textarea>
                <br></br>
                <button type="submit" className="submitButton">Submit</button>
            </form>
 

        </div> 
    )
}
}

export default Comment