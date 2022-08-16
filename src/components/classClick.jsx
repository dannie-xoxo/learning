//Event Handling.
import React , {Component}from 'react';

class ClassClick extends Component {
    clickHandler() {
        console.log('button clicked!!')
    }
    render() { 
        return (
            <>
            <button onClick={this.clickHandler}>Click me</button>
            </>
        );
    }
}
 
export default ClassClick;