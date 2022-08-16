// Conditional Rendering
import React, { Component } from 'react';

 class UserGreeting extends Component {
    constructor(props) {
        super(props);

        this.state= {
            isLoggedIn: true
        }
    }

   
    render () {
      // (4) short circuit operator approach
       return this.state.isLoggedIn && <p>Welcome Daniel</p>
    
    
    // (1) Using the if/else approach for conditional rendering
    
    /*render() { 
        if (this.state.isLoggedIn) {
            return (
                <p>Welcome Daniel</p>
            )
        } else {
        return (
            <p>Welcome Guest</p>
        )
    } */

     // (2) Using the Element variable approach
         
        /*let message
            if (this.state.isLoggedIn) {
                message= <p>Welcome Daniel</p>
            } else {
                message= <p>Welcome Guest</p>
            }
            return <p>{message}</p> 
            
             // (3) Conditional Tenary operator approach

        return this.state.isLoggedIn ? (
            <p>Welcome Daniel</p> 
         ) : (
            <p>Welcome Guest</p> 
        )
            */
        }      
} 
export default UserGreeting ;