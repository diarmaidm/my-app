import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import Card from './Card';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CardList />, document.getElementById('card'));
registerServiceWorker();
