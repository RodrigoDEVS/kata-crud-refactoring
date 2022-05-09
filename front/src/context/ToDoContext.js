import React, { createContext, useReducer} from 'react'
import { reducer } from '../components/ToDoReducer';

const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {

    const initialState = {
        todo: { list: [], item: {} }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    const data = {
        initialState,
        state, dispatch, 
        useReducer, reducer
    };

    return <ToDoContext.Provider value={data}>{children}</ToDoContext.Provider>
}
export { ToDoProvider };
export default ToDoContext;