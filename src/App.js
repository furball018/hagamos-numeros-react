import React, { Component } from 'react';
import './App.css';

//Components
import Title from './components/Title';
import QuienPago from './components/QuienPago';
import QuienPagoAddModal from './components/QuienPagoAddModal';
import QuienesEstan from './components/QuienesEstan';

class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      payPeople: [],
      noPayPeople: []
    }

    this.titleRef = React.createRef();
    this.quienPagoRef = React.createRef();
    this.quienesEstanRef = React.createRef();

    this.handleAddPayPerson = this.handleAddPayPerson.bind(this);
    this.handleRemovePayPerson = this.handleRemovePayPerson.bind(this);
  }

  handleAddPayPerson(person){
    var pp = this.state.payPeople.slice();
    pp.unshift(person);
    this.setState({payPeople: pp});
  }

  handleRemovePayPerson(key){
    var pp = this.state.payPeople.filter(function(p){
      return (p.key !== key)
    });
    this.setState({payPeople: pp});
  }

  render() {
    return (
      <div className="App">

        <div ref={this.titleRef}></div>
        <Title
        downAnchor={this.quienPagoRef}
        />
      
        <div ref={this.quienPagoRef}></div>
        <QuienPago
        payPeople={this.state.payPeople}
        onRemovePayPerson={this.handleRemovePayPerson}
        upAnchor={this.titleRef}
        downAnchor={this.quienesEstanRef}
        />

        <QuienPagoAddModal
        onAddPayPerson={this.handleAddPayPerson}
        />
      
        <div ref={this.quienesEstanRef}></div>
        <QuienesEstan
        upAnchor={this.quienPagoRef}
        />

      </div>
    );
  }
}

export default App;
