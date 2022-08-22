import React, { Component } from 'react';
import ComponentB from './componentB';
class ComponentA extends Component { 
    render() { 
        return (
            <>
            <ComponentB />
            </>
        );
    }
}
 
export default ComponentA;