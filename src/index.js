import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CardList from './CardList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

let data = [
  { name: "Paul O’Shannessy",
    avatar_url: "https://avatars.githubusercontent.com/u/8445?v=3",
    company: "Facebook"
  },
  { name: "Ben Alpert",
    avatar_url: "https://avatars.githubusercontent.com/u/6820?v=3",
    company: "Facebook"
  }
];

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<CardList cards={data} />, document.getElementById('card'));
registerServiceWorker();
