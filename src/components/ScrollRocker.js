import React, { Component } from 'react';

class ScrollRocker extends Component{
    constructor(props){
        super(props);
        this.scrollDown = this.scrollDown.bind(this);
        this.scrollUp = this.scrollUp.bind(this);
    }

    render(){
        const activeControlUp = this.props.upAnchor ? '' : 'disabled';
        const activeControlDown = this.props.downAnchor ? '' : 'disabled';
        return(
            <div className="scroll-rocker">
                <i className={"material-icons mr-3 i-btn " + activeControlUp} onClick={this.scrollUp}>keyboard_arrow_up</i>
                <i className={"material-icons mr-3 i-btn " + activeControlDown} onClick={this.scrollDown}>keyboard_arrow_down</i>
            </div>
        );
    }

    scrollUp(){
        if (!this.props.upAnchor) {
            return;
        }
        window.scrollTo({
            top: this.props.upAnchor.current.offsetTop,
            behavior: "smooth"
        });
    }
    
    scrollDown = () => {
        if (!this.props.downAnchor) {
            return;
        }
        window.scrollTo({
            top: this.props.downAnchor.current.offsetTop,
            behavior: "smooth"
        });
    }
}

export default ScrollRocker;