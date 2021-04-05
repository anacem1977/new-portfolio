import React, {Component} from 'react';
import axios from "axios";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            comments: "",
            submitted: false,
            modal: false
        }
    }

    handleData = (event) => {
        event.preventDefault();
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
        const response = await axios.post(
        //   "http://localhost:3005/comment/add"
        // //   || 
          "https://acmc-personal-portfolio.herokuapp.com//comment/add"
          , addComment);
        console.log(response.data)
        this.setState({
          submitted: true
        })
        console.log(this.state.submitted)
      }

      cleanForm = () => {
          this.setState({
            name: "",
            email: "",
            comments: "",
            submitted: false
          })
      }

render () {
    return (
        <div className="subtitle">
            <form>
                <div className="formContainer">
                    <input type="text" id="name" name="name" placeholder="Your name" autofocus required value={this.state.name} onChange={this.handleData}></input>
                    <input type="email" id="email" name="email" placeholder="Your e-mail" required value={this.state.email} onChange={this.handleData}></input>
                </div>
                <br></br>
                <textarea name="comments" id="comments" placeholder="Feedback" required value={this.state.comments} onChange={this.handleData}></textarea>
                <br></br>
                <button type="submit" className="submitButton" onClick={this.handleComment}>Submit</button>
            </form>

            {this.state.submitted ? 
                <div className="modal fade" role="dialog" id="myModal">
                <div className="modal-dialog">
                    <div className="modal-body">
                        <p>Thank you for your feedback!</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn" data-dismiss="modal" onClick={this.cleanForm}>
                            Close
                        </button>
                    </div>
                </div>
            </div>   
            : <p></p>}
            

        </div> 
    )
}
}

export default Comment