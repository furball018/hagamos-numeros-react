import React from 'react';

class QuienPago extends React.Component {
    render() {
        return(
            <div className="container quien-pago">
                <h2 className="text-center mt-4">Quién pagó?</h2>
                <div className="row">
                    <div className="col">
                        <div className="row pr-4 pl-4 list-titles">
                            <div className="col-4 pl-0 pr-0">Nombre</div>
                            <div className="col-4 pl-2 pr-2">Puso para</div>
                            <div className="col-3 pl-2 pr-2 text-right">Gastó</div>
                            <div className="col-1 pl-2 pr-2"></div>
                        </div>
                        <ul className="list-group">
                            <li className="list-group-item pt-1 pb-1">
                                <div className="row">
                                    <div className="col-4 pl-2 pr-2">
                                        <input type="text" placeholder="Nombre..." />
                                    </div>
                                    <div className="col-4 pl-2 pr-2">
                                        <input type="text" placeholder="Tipo..." className="type-input pl-2 pr-2 align-middle" />
                                    </div>
                                    <div className="col-3 pl-2 pr-2">
                                        <input type="number" min="0" className="currency currency-positive text-right" placeholder="$..."/>
                                    </div>
                                    <div className="col-1 pr-0 pl-0">
                                        <i className="material-icons mt-1 i-btn">remove_circle_outline</i>
                                    </div>
                                </div>
                            </li>
                            <li className="list-group-item text-right pt-1 pb-1">Total <span className="currency currency-total ml-2">$100</span></li>
                        </ul>
                        <div className="row">
                            <div className="col">
                                <button className="btn btn-primary mt-2">
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