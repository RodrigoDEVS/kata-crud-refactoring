import React from 'react'
import { Button, Card } from 'react-bootstrap'
import ToDoForm from './ToDoForm'
import ToDoListForm from './ToDoListForm'
import ToDoTable from './ToDoTable'

const TodoListTable = () => {
    return (
        <div className="container mt-3">
            <Card>
                <Card.Header>
                    <ToDoListForm/>
                </Card.Header>
                <Card.Body>
                <p>
                    HolaMundo
                    <Button variant="danger">Eliminar</Button>
                    </p>
                    <blockquote className="blockquote mb-0">
                        <ToDoForm/>
                        <ToDoTable/>
                    </blockquote>
                </Card.Body>
            </Card>
        </div >
    )
}

export default TodoListTable