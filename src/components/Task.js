import React, { useState } from 'react'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import TaskList from './TaskList'

function Task() {
    const [task, setTask] = useState([]);


    const addToTask = (e) => {
        e.preventDefault();

    }

    return (
        <>
            <Form onSubmit={addToTask}>
                <FormGroup >
                    <Label for="tasks">New Tasks</Label>
                    <Input onChange={addToTask} id="tasks" name="tasks" placeholder="Add a Task" value={task} />
                    <Button type="submit" className="btn btn-dark">Add Task</Button>
                </FormGroup>
            </Form >
            <div>{task}</div>
            <TaskList />
        </>
    )
}

export default Task
