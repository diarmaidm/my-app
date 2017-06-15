import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends Component {

  // handleClick = () => {
  // 	this.setState( (prevState) => ({
  //   	counter: prevState.counter + 1
  //   }) );
  // };

	render() {
    return (
      <button onClick={this.props.onClickFunction}>
        Increment
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

  incrementCounter = () => {
    	this.setState( (prevState) => ({
    	counter: prevState.counter + 1
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

        <p className="App-intro">
          <Button onClickFunction={this.incrementCounter} />
          <Result counter={this.state.counter} />
        </p>

      </div>

    </div>
    );
  }
}

// ReactDOM.render(<App />, mountNode);



// ReactDOM.render(<App />, mountNode);

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;