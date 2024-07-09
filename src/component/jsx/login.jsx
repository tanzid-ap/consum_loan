import React, { Component } from 'react';
import "./login.css";

class Signin extends Component {

    constructor(props) {
        super(props);
        this.state = {
          buetId: 'buetId',
          dob: 'dob', 
        }
    }

    setEmptyValue = (event) => {
        const name = event.target.name
        document.getElementById(name).value = "";
      
    }

    handleInputChange = (event) => {
        const target = event.target;
        let value = event.target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            buetId: 'buetId',
            dob: 'dob',
        });
    }

    authenticate = (e) => {
        const bId = 423052016;
        if (buetId === bId && dob === '01/01/2023') {
          console.log("Success! Logged in.");
        } else {
          console.log("Invalid BUET ID and/or password");
        }
        this.handleSubmit(e);
    }

    render() {
    return (
        <div className="login">
        <h4>Login</h4>
        <form >
            <div className="text_area">
            <input
                type="text"
                id="buetId"
                name="buetId"
                placeholder="BUET ID"
                className="text_input"
                onChange={this.handleInputChange} 
                onFocus={this.setEmptyValue}

            />
            </div>
            <div className="text_area">
             
            <input
                type="text"
                id="dob"
                name="dob"
                placeholder="DOB"
                onFocus={(e) => (e.target.type = "date")}
                className="text_input"
                min="1900-01-01" max="2024-01-01"
                onChange={this.handleInputChange} 
                
            />
            </div>

            <input
                type="submit"
                value="LOGIN"
                className="btn"
                onClick={this.authenticate}
            
            />
        </form>
        <a className="link" href="/signup">Sign Up</a>
        </div>
    )
    }
}

export default Signin;