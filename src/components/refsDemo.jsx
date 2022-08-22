 // Refs
 /*it is similar to keys in react.
 it is an atttribute that makes it possible to store a reference
  to particular DOM nodes or react elements.
  it provides a way to access the react DOM or react elements
  - cannot be used in  a functional component */

 import React, { Component } from 'react';
 
 class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef= React.createRef() //(1)
    }
    componentDidMount () {
        this.inputRef.current.focus() //(3)
        console.log(this.inputRef)
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() { //(2)
        return ( 
            <>  
            <input type='text' ref={this.inputRef} />    
            <button onClick={this.clickHandler}>Click</button>
            </>
         ); 
    }
 }
  
 export default RefsDemo;
 
 /* 3 steps in using refs
 - create a ref
 - attach the created ref into the input element 
 - call the focus method on this input element (componentDidMount())
 
 Uses
 - Managing focus
 - text selection
 - media playback
 - Triggering imperative animations
 - integrating with third party DOM libraries.*/
