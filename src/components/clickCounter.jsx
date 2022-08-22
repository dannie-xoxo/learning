import React, { Component } from 'react';
import Hoc from './hoc';

class ClickCounter extends Component {
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
        const {count, incrementCount}= this.props // destructuring here.
        return ( 
            <>
            <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
            </>
         );
    }
}
 
export default Hoc(ClickCounter, 2); 