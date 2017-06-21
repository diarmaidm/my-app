import React from 'react';

class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Event: Form Submit');
  }
  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input type="text" placeholder="Github username" />
        <button type="submit">Add card</button>
      </form>
    )
  }
}

export default Form;
