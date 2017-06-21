import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './CardList';
import Form from './Form';

class Button extends Component {

  handleClick = () => {
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
    return (
      <button onClick={ this.handleClick }>
        +
        { this.props.incrementValue }
      </button>
      );
  }
}
;

const Result = (props) => {
  return (
    <div>
      { props.counter }
    </div>
    );
};

class App extends Component {
  state = {
    counter: 0,
    cards: [
      {
        name: "Paul O’Shannessy",
        avatar_url: "https://avatars.githubusercontent.com/u/8445?v=3",
        company: "Facebook"
      }, {
        name: "Ben Alpert",
        avatar_url: "https://avatars.githubusercontent.com/u/6820?v=3",
        company: "Facebook"
      }
    ]
  };

  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }));
  };

  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src={ logo } className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
          </p>
          <Button incrementValue={ 1 } onClickFunction={ this.incrementCounter } />
          <Button incrementValue={ 5 } onClickFunction={ this.incrementCounter } />
          <Button incrementValue={ 10 } onClickFunction={ this.incrementCounter } />
          <Result counter={ this.state.counter } />
        </div>
        <div>
          <Form />
          <CardList cards={ this.state.cards } />
        </div>
      </div>
      );
  }
}

export default App;