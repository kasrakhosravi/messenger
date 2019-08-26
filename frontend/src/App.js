
// global dependencies
import React, { Component } from 'react'

// local dependencies
import logo from './assets/logo.svg'
import './App.css'
import Chat from './components/Chat'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Chat />
      </div>
    )
  }
}

export default App
