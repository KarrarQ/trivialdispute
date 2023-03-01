import React, { Component } from 'react';
import '../App/App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      triviaQuestions: []
    }
  }
  render() {
    return (
      <h1>Trivial Dispute</h1>
    )
  }
}

export default App;
