import React from 'react';

function Person({person}) {
    return ( 
        <>
        <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}.</h2>
        </>
     );
}

export default Person;

/* created a component to put the JSX in
which is now used as a prop */