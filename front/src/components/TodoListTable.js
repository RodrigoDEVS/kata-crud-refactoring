import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Table } from 'react-bootstrap'
import ToDoListContext from '../context/ToDoListContext'
import ToDoForm from './ToDoForm'
import ToDoListForm from './ToDoListForm'
import { server } from "../context/Api";

const TodoListTable = () => {

    const { state, dispatch } = useContext(ToDoListContext)

    const listado = state.todo.list

    console.log("Listado:")
    console.log(listado)

    useEffect(() => {
        fetch(`${server}/todolist`)
            .then(response => response.json())
            .then(list => {
                dispatch({ type: "update-list", list })
            })
    }, [dispatch])

    const [lista, setLista] = useState()

    useEffect(() => {
        fetch(`${server}/todos`)
            .then(response => response.json())
            .then(list => {
                setLista(list)
            })
    }, [])

    const onDelete = (id) => {
        fetch(`${server}/${id}/todolist`, {
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

    return (
        <div className="container mt-3">
            <ToDoListForm />
            {(listado).map((element, index) => (
                <Card key={index}>
                    <Card.Header>
                        
                    </Card.Header>
                    <Card.Body>
                        <p style={{ textAlign: "center" }}>{element.name}</p>
                        <p style={{ textAlign: "center" }}>
                            <Button variant="danger" onClick={() => onDelete(element.id)}>Eliminar</Button>
                        </p>
                        <blockquote className="blockquote mb-0">
                            <ToDoForm ide={element.id} neim={element.name}/>
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
                                    {lista.map((element, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{element.name}</td>
                                            <td style={{ textAlign: "center" }}><input type="checkbox" defaultChecked={element.completed}
                                                onChange={(event) => onChange(event, element)}></input></td>
                                            <td style={{ textAlign: "center" }}>
                                                <Button variant="primary" onClick={() => { onEdit(element) }}>Editar</Button>{' '}
                                                <Button variant="danger" onClick={() => onDelete(element.id)}>Eliminar</Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </blockquote>
                    </Card.Body>

                </Card>
            ))}
        </div >
    )
}

export default TodoListTable