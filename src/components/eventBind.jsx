          // Binding Event Handlers.
          
import React, { Component } from 'react';

class  EventBind extends Component {
    constructor() {
        super()
            this.state= {
                message: 'Hello'
            }
        }
        clickHandler = () => {       // (4) arrow function as a class property.
            this.setState({
                message: 'Goodbye'
            })
    }
    
    render() { 
        return ( 
            <>
            <p>{this.state.message}</p>
            <button onClick={this.clickHandler }>click</button>
            </>
         );
    }
}
 
 
export default EventBind ;

/* approches used in binding event handlers.
(1) binding in the render method  {this.clickHandler.bind(this)} 
not used because  of performance issues due to re-rendering everytime
the event is run.

(2) arrow functions in the render method. {()=> this.clickHandler()}

(3) binding in the  class constructor.  this.clickHandler= this.clickHandler.bind(this)
most used approach */ 
