import React, {useState} from "react";
import {Button, Form} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import Employees from "./Employees";
import {v4 as uuid} from 'uuid'
import {Link, useNavigate} from "react-router-dom";

const Add = () => {
    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [age, setAge] = useState("")

    let history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const ids = uuid()
        let uniqId = ids.slice(0, 8)

        let a = name, b = surname, c = age

        Employees.push({Id: uniqId, Name: name, Surname: surname, Age: age})
        history("/")
    }
    return <div>
        <Form className="d-grid gap2" style={{margin: "15rem"}}>
            <Form.Group className={"mb-3"} controlId={"formName"}>
                <Form.Control type={"text"} placeholder={"Enter name"}
                              required onChange={(e) => setName(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className={"mb-3"} controlId={"formSurname"}>
                <Form.Control className={"mb-3"} placeholder={"Enter surname"}
                              required onChange={(e) => setSurname(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Form.Group className={"mb-3"} controlId={"formAge"}>
                <Form.Control type={"text"} placeholder={"Enter age"}
                              required onChange={(e) => setAge(e.target.value)}>
                </Form.Control>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type={"submit"}>Submit</Button>
        </Form>
    </div>
}

export default Add;