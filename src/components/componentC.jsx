import React, { Component } from 'react';
import { UserConsumer } from './userContext';

class ComponentC extends Component {
    render() { 
        return (
            <>
            <UserConsumer>
                {
                    (username) => {
                        return(
                            <p>Hello {username}</p>
                        )
                    }
                }
            </UserConsumer>
            </>
        );
    }
}
 
export default ComponentC;

// Line 9: the function is a child of the consumer component