import React from 'react';
import ScrollRocker from './ScrollRocker';


class QuienesEstan extends React.Component {
    render() {
        return(
            <div className="container quienes-estan app-section">
            <ScrollRocker upAnchor={this.props.upAnchor} downAnchor={this.props.downAnchor}/>
                <h2 className="mt-4">Quiénes están?</h2>
                <div className="row">
                    <div className="col">
                        <div className="row pr-4 pl-4 list-titles">
                            <div className="col-7 pl-0 pr-0">Nombre</div>
                            <div className="col-4 pl-2 pr-2 text-right">Debe</div>
                            <div className="col-1 pl-2 pr-2"></div>
                        </div>
                        <ul className="list-group">
                                <li className="list-group-item pb-1 pt-1">
                                    <div className="row">
                                        <div className="col-1 pr-0 pl-0">
                                            <i className="material-icons mt-1 i-btn">menu</i>
                                        </div>
                                        <div className="col-6 pl-2 pr-2">
                                            Nombre
                                        </div>
                                        <div className="col-4 pl-2 pr-2 currency currency-positive text-right">
                                            $150
                                        </div>
                                        <div className="col-1 pr-0 pl-0">
                                            <i className="material-icons mt-1 i-btn">block</i>
                                        </div>
                                    </div>
                                    {/* show only when needed
                                    <div className="row">
                                        Details
                                    </div>
                                    */}
                                </li>
                                <li className="list-group-item pb-1 pt-1">
                                    <div className="row">
                                        <div className="col-1 pr-0 pl-0">
                                            <i className="material-icons mt-1 i-btn">menu</i>
                                        </div>
                                        <div className="col-6 pl-2 pr-2">
                                            <input type="text" placeholder="Nombre..."/>
                                        </div>
                                        <div className="col-4 pl-2 pr-2 currency currency-positive text-right">
                                            $150
                                        </div>
                                        <div className="col-1 pr-0 pl-0">
                                            <i className="material-icons mt-1 i-btn">remove_circle_outline</i>
                                        </div>
                                    </div>
                                    {/* show only if needed
                                    <div className="row pt-2 pr-4 pl-4">
                                        <div className="type-toggle mr-2 mb-2 pl-3 pr-3" v-for="type in usedTypes" v-on:click="">
                                            {{ type }}
                                        </div>
                                    </div>
                                    */}
                                </li>
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

export default QuienesEstan;