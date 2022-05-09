import React, { useContext, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { server } from "../context/Api";
import ToDoContext from '../context/ToDoContext';


const ToDoTable = () => {

  const { state, dispatch } = useContext(ToDoContext)

  console.log("currentList:")
  console.log(state.todo.list)

  useEffect(() => {
    fetch(`${server}/todos`)
      .then(response => response.json())
      .then(list => {
        dispatch({ type: "update-list", list })
      })
  }, [dispatch])

  const onDelete = (id) => {
    fetch(`${server}/${id}/todo`, {
      method: "DELETE"
    })
      .then((list) => {
        dispatch({ type: "delete-item", id })
      })
  }

  const onEdit = (element) => {
    dispatch({ type: "edit-item", item: element })
  }

  const onChange = (event, todo) => {
    const request = {
      name: todo.name,
      id: todo.id,
      completed: event.target.checked
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
      });
  };

  return (<div className="container mt-3">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th style={{ textAlign: "center" }}>Nombre</th>
          <th style={{ textAlign: "center" }}>¿Está Completado?</th>
          <th style={{ textAlign: "center" }}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {(state.todo.list).map((element, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{element.name}</td>
            <td style={{ textAlign: "center" }}><input type="checkbox" defaultChecked={element.completed}
              onChange={(event) => onChange(event, element)}></input>{element.completed ? "Si" : "No"}</td>
            <td style={{ textAlign: "center" }}>
              <Button variant="primary" onClick={() => { onEdit(element) }}>Editar</Button>{' '}
              <Button variant="danger" onClick={() => onDelete(element.id)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
  )
}

export default ToDoTable