import ScrollRocker from './ScrollRocker';
import React from 'react';

class Title extends React.Component {
    render() {
        return(
            <div className="container-fluid title-bar text-center pt-3 pb-3">
            <ScrollRocker upAnchor={this.props.upAnchor} downAnchor={this.props.downAnchor}/>
                <h3>
                    Hagamos Numeros
                </h3>
            </div>
        );
    }
}

export default Title;