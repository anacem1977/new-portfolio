import React, {Component} from 'react';
import axios from "axios";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            comments: "",
            submitted: false
        }
    }

    handleData = (event) => {
        event.preventDefault();
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleComment = async (event) => {
        event.preventDefault();
        const addComment = {
          name: this.state.name,
          email: this.state.email,
          comments: this.state.comments
        };
        console.log(addComment);
        const response = await axios.post(
          "http://localhost:3005/comment/add"
        //   || 
        //   "https://beer-encyclopaedia.herokuapp.com/user/signup"
          , addComment);
        console.log(response.data)
        this.setState({
          submitted: true
        })
        console.log(this.state.submitted)
      }

render () {
    return (
        <div className="subtitle">
            <form>
                <div className="formContainer">
                    <input type="text" id="name" name="name" placeholder="Your name" autofocus required onChange={this.handleData}></input>
                    <input type="email" id="email" name="email" placeholder="Your e-mail" required onChange={this.handleData}></input>
                </div>
                <br></br>
                <textarea name="comments" id="comments" placeholder="Feedback" required onChange={this.handleData}></textarea>
                <br></br>
                <button type="submit" className="submitButton" onClick={this.handleComment}>Submit</button>
            </form>
 

        </div> 
    )
}
}

export default Comment