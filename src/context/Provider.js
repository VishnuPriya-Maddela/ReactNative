import React, {createContext, useReducer} from 'react';
import Auth from './reducers/auth'
import AuthInitialState from './intial_state/auth'
import Contact from './reducers/contact'
import ContactInitialState from './intial_state/contact.js'

export const GlobalContext = createContext({})
const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(Auth,AuthInitialState)
    const [contactState, contactDispatch] = useReducer(Contact,ContactInitialState)
    console.log('authstate is',{authState})
    console.log('Authstate is',{AuthInitialState})

    return (
        <GlobalContext.Provider 
        value = {{authState,authDispatch,contactState,contactDispatch}}>
        {children} 
        </GlobalContext.Provider>
    );

};
export default GlobalProvider;