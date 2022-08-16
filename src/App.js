import React from 'react';
import Learn from './components/learn';
import Temp from './components/temp';
import Message from './components/message';
import FunctionClick from './components/functionClick';
import ClassClick from './components/classClick';
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';
import UserGreeting from './components/userGreeting';
import NameList from './components/nameList';
import Form from './components/form';
import LifecycleA from './components/lifecycleA';


function App() {
  return (
    <div className="App">

     {/* <Learn  name='Daniel' occupation='Web Developer'> 
     <p>This is children props</p>
     </Learn>
     <Learn name='Bryan' occupation='Writer'>
      <button>yes</button>
     </Learn>
     <Learn name='Kdee' occupation='Music Producer' />

     <Temp name='Daniel' occupation='Web Developer'/>
     <Temp name='Bryan' occupation='Writer'/>
     <Temp name='Kdee' occupation='Music Producer'/> */}

     {/* <Message/> */}

     {/* <FunctionClick />
     <ClassClick /> */}
     {/* <EventBind /> */}
     {/* <ParentComponent   /> */}
     {/* <UserGreeting /> */}
     {/* <NameList /> */}
     {/* <Form /> */}
     <LifecycleA />
    </div>
  );
}

export default App;
