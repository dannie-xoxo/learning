     //List Rendering.
import React from 'react';
import Person from './person';

function NameList () {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 25,
            skill: 'Vue'
        },
        {
            id: 3,
            name: 'Diana',
            age: 22,
            skill: 'Angular'
        }
    ]
     const personList = persons.map (person => ( <Person key = {person.id} person = {person}/>))
     return (
        <>
        {personList}
        </>
     )
    // const nameList = names.map((name, index) => <h2 key= {index}> {name}</h2>)
    // return ( 
    //     <>
    //     {nameList}
    //     </>
    //  );
}

export default NameList ;

/* Comments
 for list rendering, we use the ES6  map() method to
 iterate through list items to enable rendering.

  A 'key' is a special string attribute which needs to be included
  when creating a list of elements'
 - keys give the elements a stable identity
 - keys help react to identify which items have changed, added or removed.
 - help in efficient update of the user interface.
 
 INDEX AS A KEY
 when to use index as a key
 - the items in your list do not have a unique id
 - a static list
 - an unfiltered or reordered list
 
 PS: use index as a last resort*/
 