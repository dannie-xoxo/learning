import React from 'react';

function ChildComponent(props) {
    return ( 
        <>
        <button onClick={ () =>props.greetHandler('Daniel')}>Greet Parent</button> 
        </>
     );
}

export default ChildComponent ;

/*In line 6 
used arrow function due to the infusion of parameters to the props 
*/