import React, { Component } from 'react';
import Hoc from './hoc';

class HoverCounter extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state= {
    //         count: 0
    //     }
    // }
    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return{count: prevState.count + 1}
    //     })
    // }
    render() { 
        const {count, incrementCount} = this.props // Destructing here
        return ( 
            <>
            <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
            </>
         );
    }
}
 
export default Hoc(HoverCounter, 5);