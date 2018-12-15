import React, { Component } from 'react';
import './App.css';

//Components
import Title from './components/Title';
import QuienPago from './components/QuienPago';
import QuienesEstan from './components/QuienesEstan';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Title />
      
        <QuienPago />
      
        <QuienesEstan />
      
      </div>
    );
  }
}

export default App;
