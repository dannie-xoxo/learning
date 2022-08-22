import React, { Component } from 'react';
import ComponentC from './componentC';

class ComponentB extends Component { 
    render() { 
        return (
            <>
            <ComponentC />
            </>
        );
    }
}
 
export default ComponentB;