// using Class component

import React, {Component}from 'react';

class Temp extends Component {
    render () {     //props destructuring.
        const {name, occupation}= this.props
        return (
            <h1>Welcome {name} a.k.a 
            {occupation}
            </h1>
        ) 
    }
}

export default Temp