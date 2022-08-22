//   Forwarding ref
import React from 'react';

 const FRInput= React.forwardRef((props, ref)=> {
    return ( 
        <>
        <input type='text' ref={ref}/>
        </>
     );
})

export default FRInput;
// used to forward reference to the child component