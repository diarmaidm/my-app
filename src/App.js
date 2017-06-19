import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {

  handleClick = () => {
  	this.props.onClickFunction(this.props.incrementValue);
  };

	render() {
    return (
      <button onClick={this.handleClick}>
        +{this.props.incrementValue}
      </button>
    );
  }
};

const Result = (props) => {
	return (
  <div>{props.counter}</div>
  );
};

class App extends Component {
	state = { counter: 0 };

  incrementCounter = (incrementValue) => {
    	this.setState( (prevState) => ({
    	counter: prevState.counter + incrementValue
    }) );
  };

	render() {
  	return (
    <div>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        </p>
        <Button incrementValue={1} onClickFunction={this.incrementCounter} />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />

        {/*<Button onClickFunction={this.incrementCounter} />*/}
        <Result counter={this.state.counter} />

      </div>

    </div>
    );
  }
}

export default App;