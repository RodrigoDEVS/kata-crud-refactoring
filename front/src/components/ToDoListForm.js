import React, { useContext, useRef, useState } from 'react'
import { server } from "../context/Api";
import { Form, Button } from 'react-bootstrap'
import ToDoListContext from '../context/ToDoListContext';

const ToDoListForm = () => {

    const { dispatch, state: { todo } } = useContext(ToDoListContext)

    const formRef = useRef(null);
    const item = todo.item;
    const [state, setState] = useState(item);

    const onAdd = (event) => {

        event.preventDefault();

        const request = {
            name: state.name,
            id: null
        };

        fetch(`${server}/todolist`, {
            method: "POST",
            body: JSON.stringify(request),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((todo) => {
                dispatch({ type: "add-item", item: todo });
                setState({ name: "" });
                formRef.current.reset();
            });
    }

    return (
        <div>
            <Form className="container mt-2" >
                <Form.Control type="text" name="name" defaultValue={item.name} onChange={(event) => {
                    setState({ ...state, name: event.target.value })
                }} />
                <Button variant="primary mt-2" onClick={onAdd}>Agregar</Button>
            </Form>
        </div>
    )
}

export default ToDoListForm