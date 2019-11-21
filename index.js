import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Board from './Board';
import Github from './Github';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <Github/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
