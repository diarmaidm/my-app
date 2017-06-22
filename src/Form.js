import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  state = {
    userName: ''
  }
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: Form Submit', this.state.userName);
    // ajax... (fetch or axios)
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(resp => {
        console.log(resp.data);
      });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName}
          onChange={(event) => this.setState({userName: event.target.value})}
          placeholder="Github username"
          required/>
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default Form;
