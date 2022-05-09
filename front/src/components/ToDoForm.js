import React, { useContext, useRef, useState } from 'react'
import { server } from "../context/Api";
import { Button, Form } from 'react-bootstrap'
import ToDoContext from "../context/ToDoContext";

const ToDoForm = () => {

  const { dispatch, state: { todo } } = useContext(ToDoContext)

  const formRef = useRef(null);
  const item = todo.item;
  const [state, setState] = useState(item);

  const onAdd = (event) => {

    event.preventDefault();

    const request = {
      name: state.name,
      id: null,
      completed: false
    };

    fetch(`${server}/todo`, {
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

  const onEdit = (event) => {
    event.preventDefault();

    const request = {
      name: state.name,
      id: item.id,
      isCompleted: item.isCompleted
    };

    fetch(`${server}/todo`, {
      method: "PUT",
      body: JSON.stringify(request),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then((todo) => {
        dispatch({ type: "update-item", item: todo });
        setState({ name: "" });
        formRef.current.reset();
      });
  }


  return <div>
    <Form className="container mt-2" ref={formRef}>
      <Form.Control type="text" name="name" defaultValue={item.name} onChange={(event) => {
        setState({ ...state, name: event.target.value })
      }} />
      {item.id && <Button variant="secondary mt-2" onClick={onEdit}>Actualizar</Button>}
      {!item.id && <Button variant="primary mt-2" onClick={onAdd}>Agregar</Button>}
    </Form>
  </div>


}

export default ToDoForm