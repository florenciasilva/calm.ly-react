import React, { Component } from 'react';
import Routes from './Components/Routes'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Routes />
        <img src='https://media.giphy.com/media/47z2myH84vbqyijZDK/giphy.gif' alt='bunny' />
      </div>
    );
  }
}

export default App;