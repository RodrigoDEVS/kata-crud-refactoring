import React, { createContext, useReducer} from 'react'
import { reducerList } from '../components/ToDoListReducer';

const ToDoListContext = createContext();

const ToDoListProvider = ({ children }) => {

    const initialState = {
        todo: { list: [], item: {} }
    };

    const [state, dispatch] = useReducer(reducerList, initialState);

    const data = {
        initialState,
        state, dispatch, 
        useReducer, reducerList
    };

    return <ToDoListContext.Provider value={data}>{children}</ToDoListContext.Provider>
}
export { ToDoListProvider };
export default ToDoListContext;