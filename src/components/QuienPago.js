import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import ScrollRocker from './ScrollRocker';

class QuienPago extends Component {
    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(k){
        this.props.onRemovePayPerson(k);
    }

    render() {

        const payPeopleList = this.props.payPeople.map((person) =>
            <li className="list-group-item pt-1 pb-1" key={person.key}>
                <div className="row">
                    <div className="col-4 pl-2 pr-2">
                        <p className="mb-0">{person.name}</p>
                    </div>
                    <div className="col-4 pl-2 pr-2">
                        <span className="type-tag pl-2 pr-2 align-middle mb-0">{person.type}</span>
                    </div>
                    <div className="col-3 pl-2 pr-2">
                        <p className="currency currency-positive text-right mb-0">${person.payed}</p>
                    </div>
                    <div className="col-1 pr-0 pl-0">
                        <i className="material-icons mt-1 i-btn" onClick={() => this.delete(person.key)}>remove_circle_outline</i>
                    </div>
                </div>
            </li>
        );

        const total = this.props.payPeople.reduce((a, b) => a + b.payed, 0);

        return(
            <div className="container quien-pago app-section">
                <ScrollRocker upAnchor={this.props.upAnchor} downAnchor={this.props.downAnchor}/>
                <h2 className="mt-4">Quién pagó?</h2>
                <div className="row">
                    <div className="col">
                        <div className="row pr-4 pl-4 list-titles">
                            <div className="col-4 pl-0 pr-0">Nombre</div>
                            <div className="col-4 pl-2 pr-2">Puso para</div>
                            <div className="col-3 pl-2 pr-2 text-right">Gastó</div>
                            <div className="col-1 pl-2 pr-2"></div>
                        </div>
                        <ul className="list-group">
                        <FlipMove
                        duration={300}
                        easing="ease-in-out"
                        delay={100}
                        enterAnimation='fade'
                        staggerDurationBy={100}>
                            {payPeopleList}
                            <li className="list-group-item text-right pt-1 pb-1" key={0}>Total <span className="currency currency-total ml-2">${total}</span></li>
                        </FlipMove>
                        </ul>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-primary mt-2" data-toggle="modal" data-target="#AddPayPerson">
                                    <i className="material-icons align-middle">add_circle_outline</i>
                                    Agregar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default QuienPago;