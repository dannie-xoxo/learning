      // Mounting Lifecycle 
      //Updating Lifecycle

import React, { Component } from 'react';
import LifecycleB from './lifecycleB';

class LifecycleA extends Component {
    constructor(props) {  //(m)
        super(props);

        this.state= {
            name: 'Daniel'
        }
        console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps (props, state) { //(m and u)
        console.log('LifecycleA getDerivedStateFromProps')
         return null
    }
    componentDidMount () {  //(m)
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate () {  //(u)
        console.log ('LifecycleA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) { //(u)
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    componentDidUpdate() {  //(u)
        console.log('LifecycleA componentDidUpdate')
    }
    changeState= ()=> {
        this.setState({
            name: 'Codevolution'
        })
    }
    render() {  //(m and u)
        console.log('LifecycleA render')
        return ( 
            <>
            <div>Lifecycle A</div>
            <button onClick={this.changeState}>Change state</button>
            <LifecycleB />
            </>
         );
    }
}
 
export default LifecycleA;

/* Lifecycle Methods 
CLassified into 4 phases

(1) Mounting: This is called when an instance of a component is being created and inserted into the DOM.
4 methods:
-constructor: this is a special function that will get called whenever a new component is created
 Uses
 *it is used for initializing state
 *binding the event Handlers to the class instance
 * do not cause side effects e.g calling HTTP request.
 * A special function  called super() has to be called 
 * it is the only place to change or set the state by directly overwriting the 'this.state' fields

- static getDerivedStateFromProps:a rarely used lifecycle method
it is used when the state of the component depends on the changes in props over time.
 Uses
 * it is used to set the state.
 * doesnt use the this keyword
 * do nt cause side effects e.g HTTP request.
 
- render(): It is the only required method in a class component.
  it reads props and state and returns the JSX
  do not change the state or interact with the DOM orr make AJAX calls
  children components lifecycle methods are also executed after its parent render method.

- componentDidMount(): It is called only once in the entire lifecycle of a component.
 it is invoked immediately after a component and all its childrem components have been rendered into the DOM.
 This is the perfect place to cause side effects e.g interact with the DOM or perform any AJAX calls to load data.

(2) Updating: This is called when a component is being re-rendered as a result of changes to either its props or state.
 5 methods:
- static getDerivedStateFromProps

- shouldComponentUpdate(nextProps, nextState):  a rarely used method. It dictates if the component should re-render or not
 * used for performance  optimization 
 * do not cause any side effects e.g HTTP requests o calling the Setstate method.
 
- render

- getSnapshotBeforeUpdate(prevProps, preState): it is called right after the changes from the virtual DOM 
  are to be reflected in the DOM.
  a rarely used method
  * used to capture some information from the DOM
  * method will either run null or return a value.
  * returned value will be passed as a third parameter to the next method.
  
- componentDidUpdate(prevProps, prevState,snapshot): this is called after the render is finished in the re-render cycles
   * called only once
   * cause side effects but compare the prev props with the new props before the AJAX calls.
   * 
(3) Unmounting: This is called when a component is being removed from the DOM
 1 method:
 - componentWillUnmount(): method is invoked immediately before a component is unmounted and destroyed
 * peform task like cancelling any network requests, removing event handlers, cancelling any subscriptions
 and also invalidating timers.
  * do not call the setState method

(4)Error Handling: This is called when there is an error during rendering, in a lifecycle method or in
the constructor of any child component
 2 methods;
 - static geDerivedStateFromError(error) 
 - componentDidCatch(error, info)

 these two methods are called when there is an error either during re-rendering in a lifecycle method,
 or in the constructor of any child component
*/
 