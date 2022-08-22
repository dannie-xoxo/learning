/* Context API 
This provides way to pass data through the component
tree without having to pass props down manualy at every level.

 3 steps to implement the context API

 - create the context. (using the userContext = React.createContext() )
 - provide the context value (using the userProvider component)
 - consume the context value (using the userConsumer component)*/

import React from 'react';

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}