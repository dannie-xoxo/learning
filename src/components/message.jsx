import React, {Component}from 'react';

class Message extends Component {
    constructor () {
        super ()
        this.state= {
            message:'Welcome visitor'
        }
    }
    changeMessage () {
        this.setState({
            message:'Thank you for subscribing'
        })
    }
    render () {
        return (
            <>
           <h1>{this.state.message}</h1>
           <button onClick={()=>this.changeMessage()}>Subscribe</button>
           </>
           
        ) 
    }
}

export default Message


       // State//
/* -state is managed within the components.
- variables declared in the function body. 
- state can be changed.
-  useState for ()=> 
- this.state for class.*/
