import React from 'react';
import {Link} from "react-router-dom";

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
    this.setState({
        username: "",
        password: ""
    });
  }

  updateUsername(e){
    this.setState({
      username: e.target.value 
    })
  }

  updatePassword(e){
    this.setState({
      password: e.target.value 
    })
  }

  render(){
    const errors = this.props.errors.map((error, idx) =>{
      return <li key={idx}>{error}</li>
    })
    return (
      <div>
        <h2>{this.props.formType === "signup" ? "Sign up" : "Log in"}</h2>
        <Link to={this.props.formType === "signup" ? "/login" : "/signup"}>{this.props.formType === "signup" ? "Log in" : "Sign Up"}</Link>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.updateUsername.bind(this)} value={this.state.username} placeholder="username"/>
          <input type="text" onChange={this.updatePassword.bind(this)} value={this.state.password} placeholder="password"/>
          <button>Submit!</button>
        </form>
        <ul>
          {errors}
        </ul>
      </div>
    )
  }
}

export default SessionForm