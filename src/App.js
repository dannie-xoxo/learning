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
import FragmentDemo from './components/fragmentDemo';
import RefsDemo from './components/refsDemo';
import FocusInput from './components/focusInput';
import FRParentInput from './components/FRParentInput';
import ClickCounter from './components/clickCounter';
import HoverCounter from './components/hoverCounter';
import Counter from './components/counter';
import ClickCounter2 from './components/clickCounter2';
import HoverCounter2 from './components/hoverCounter2';
import ComponentA from './components/componentA';
import { UserProvider } from './components/userContext';


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
     {/* <LifecycleA /> */}
     {/* <FragmentDemo /> */}
     {/* <RefsDemo /> */}
     {/* <FocusInput /> */}
     {/* <FRParentInput /> */}
     {/* <ClickCounter name='Daniel'/>
     <HoverCounter /> */}
    
     {/* <Counter render={(count, incrementCount) => (
      <ClickCounter2 count={count} incrementCount= {incrementCount} /> // here, props values are functions
     )}
       />
       <Counter render={(count, incrementCount) => (
      <HoverCounter2 count={count} incrementCount= {incrementCount} /> // here, props values are functions
     )}
       /> */}
       <UserProvider value='Daniel'>
       <ComponentA />
       </UserProvider>
    </div>
  );
}

export default App;
