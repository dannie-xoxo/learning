  // Event handling.
  import React from 'react';

  const FunctionClick=() => {
   function clickHandler(){
        console.log('button clicked')
    }
    return (  
        <>
        <button onClick={clickHandler}>Click</button>
        </>
    );
  }
  
  export default FunctionClick;

/* event handler is a function and not a function call.
do not add the parenthesis () */