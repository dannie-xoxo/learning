/*Higher order component */
/*This is used to share common functionality between components
It is a pattern where a function takes a component as an argument
and returns a  new component.
e.g const IronMan = withSuit (TonyStark) */
import React from 'react';

const Hoc = (WrappedComponent, incrementNumber )=> {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props);
            this.state= {
                count: 0
            }
        }
        incrementCount = () => {
            this.setState(prevState => {
                return{count: prevState.count + incrementNumber} 
            })
        } // count and incrementCount were used as props 
        render () {
           return <WrappedComponent count= {this.state.count}
            incrementCount= {this.incrementCount} {...this.props}/> // always pass down the remaining props
        
        }
    }
    return NewComponent 
}
export default Hoc;