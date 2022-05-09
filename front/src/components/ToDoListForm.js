import React from 'react'
import {Form, Button} from 'react-bootstrap'

const ToDoListForm = () => {
    return (
        <div>
            <Form className="container mt-2" >
                <Form.Control type="text" name="name" />
                <Button variant="primary mt-2" >Nueva Lista</Button>
            </Form>
        </div>
    )
}

export default ToDoListForm