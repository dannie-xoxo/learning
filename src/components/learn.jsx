// using Functional component
import React from 'react';
 // props destructuring.
 
const Learn= ({name, occupation}) => {
    return ( 
        <>      
        <h1>Hello {name}  
        {occupation}
        </h1>
       
        </>
     );
}

export default Learn;


//Comments//

            //Props//
 /*props value can't be changed. (immutable)
props get passed into the component. 
function parameters.
-props for ()=>
-this.props for class*/


  