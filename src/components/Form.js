import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: "",
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

//     handleSubmit = (e) => {
//       e.preventDefault()
    
//     console.log("made it to handle sub")
//     const user = this.props.users.find(user => user.username === this.state.username)
//     console.log(user, "user & handle sub")
//     return this.props.currentUser(user)
    
// }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {name, username, password} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>

        <label htmlFor="name">Name:</label>
        <input type="text" autoComplete="off" name="name" value={name} onChange={this.handleChange}/>
        <label htmlFor="username">Username:</label>
        <input type="text" autoComplete="off" name="username" value={username} onChange={this.handleChange}/>
        <label htmlFor="password">Password:</label>
        <input type="password" autoComplete="off" name="password" value={password} onChange={this.handleChange}/>
        <input className="submitButton" type="submit" value="Submit"/>
      </form>
    );
  }

}

export default Form;