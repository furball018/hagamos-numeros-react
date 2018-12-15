import React, { Component } from 'react';

class QuienPagoAddModal extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            type: '',
            payed: ''
        }

        this.onAddPayPerson = this.onAddPayPerson.bind(this);
    }

    onAddPayPerson(){
        var newPayPerson = {
            name: this._nameInput.value,
            type: this._typeInput.value,
            payed: parseFloat(this._payedInput.value),
            key: Date.now()
        };
        this.props.onAddPayPerson(newPayPerson);
        this.setState({
            name: '',
            type: '',
            payed: ''
        });
    }

    render(){
        return(
            <div>
                <div className="modal fade" id="AddPayPerson" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Agregar quién pagó</h5>
                        </div>
                        <div className="modal-body">
                            <input ref={(name) => this._nameInput = name} type="text" placeholder="Nombre..." className="mb-2" onChange={e => this.setState({name: e.target.value})} value={this.state.name}/>
                            <input ref={(type) => this._typeInput = type} type="text" placeholder="Qué compró?" className="pl-2 pr-2 align-middle mb-2" onChange={e => this.setState({type: e.target.value})} value={this.state.type}/>
                            <input ref={(payed) => this._payedInput = payed} type="number" min="0" className="currency currency-positive mb-2" placeholder="Cuánto pagó?" onChange={e => this.setState({payed: e.target.value})} value={this.state.payed}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">cerrar</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.onAddPayPerson} disabled={!(this.state.name && this.state.type && this.state.payed)}>Agregar</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default QuienPagoAddModal;