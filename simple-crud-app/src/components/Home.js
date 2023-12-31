import React, {Fragment} from "react";
import {Button, Table} from "react-bootstrap"
import Employees from "./Employees";
import "bootstrap/dist/css/bootstrap.min.css"
import {Link, useNavigate} from "react-router-dom";

const Home = () => {
    let history = useNavigate()

    const handleEdit = (Id, Name, Surname, Age) => {
        localStorage.setItem("Name", Name)
        localStorage.setItem("Surname", Surname)
        localStorage.setItem("Age", Age)
        localStorage.setItem("Id", Id)
    }

    const handleDelete = (Id) => {
        let index = Employees.map((e) => {
            return e.Id;
        }).indexOf(Id)
        Employees.splice(index, 1)
        history("/")
    }

    return (
        <Fragment>
            <div style={{margin: "10rem"}}>
                <Table striped bordered hover size={"sm"}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Employees && Employees.length > 0 ? Employees.map((item) => {
                        return (
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Surname}</td>
                                <td>{item.Age}</td>
                                <td>
                                    <Link to={"/edit"}>
                                        <Button
                                            onClick={() => handleEdit(item.Id, item.Name, item.Surname, item.Age)}>Edit</Button>
                                    </Link>
                                    &nbsp;
                                    <Button onClick={() => handleDelete(item.Id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    }) : "Brak pracowników w bazie."
                    }
                    </tbody>
                </Table>
                <br></br>
                <Link className={"d-grid gap-2"} to={"/create"}>
                    <Button size={"lg"}>Create</Button>
                </Link>
            </div>
        </Fragment>
    )
}

export default Home;