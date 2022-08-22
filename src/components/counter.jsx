/*Render Props
This refers to a technique for sharing code between react 
component using props whose value is a function */

import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    incrementCount = () => {
        this.setState(prevState => {
            return{count: prevState.count + 1}
        })
    }
    render() { 
        return ( 
            <>
            {this.props.render (this.state.count, this.incrementCount)}
            </>
        );
    }
}
 
export default Counter;