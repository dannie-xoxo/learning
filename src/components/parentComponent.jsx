        //Methods as props

import React, { Component } from 'react';
import ChildComponent from './childComponent';
class ParentComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state={
            parentName: 'Orisaeke'
        }
        // this.greetParent= this.greetParent.bind(this)
    }

    greetParent = (childName)=> {                           // used arrow function in class property for binding //
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }


    // greetParent (childName) {
    //     alert(`Hello ${this.state.parentName} from ${childName}`)
    // }

    render() { 
        return ( 
            <>
            <ChildComponent greetHandler= {this.greetParent} />
            </>
         )
    }
}

export default ParentComponent;