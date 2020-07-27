import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import APIManager from '../Modules/APIManager';
import './Login.css'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ userId: 0});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        APIManager.GetAll("users")
        .then((response) => {
            setUsers(response)
        })
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        const userNameInputValue = document.getElementById("userName").value
        const userPassword = document.getElementById("password").value
        let userNameCheck = false
        let passwordCheck = false
        console.log(userNameInputValue)
        console.log(userPassword)

        users.forEach(user => {

            if (user.userName === userNameInputValue) {
                userNameCheck = true;
                if (user.password === userPassword) {
                    passwordCheck = true;
                    credentials.userId = user.id
                    props.setUsers(credentials)
                    props.history.push("/Dashboard")
                }
            }
        })
            if (userNameCheck === true) {
                if (passwordCheck === false) {
                    return (
                        window.alert("Password is incorrect.")
                    )
                }
            } else {
                return(window.alert("Username is incorrect."))
            }
    }
    const handleFieldChange = (event) => {
        const stateToChange = { ...credentials };
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    }

    return (
        <div className="login-container">

        <div className="login-top">
        </div>

        <div className="login-bottom">
        <Form onSubmit={handleLogin}>
            <Form.Group>
                <Form.Label className="loginLabel">Username</Form.Label>
                <Form.Control className="loginForm"
                    onChange={handleFieldChange}
                    type="text"
                    id="userName"
                    placeholder="Enter Username"
                />
            </Form.Group>
            <Form.Group>
                <Form.Label className="loginLabel">Password</Form.Label>
                <Form.Control className="loginForm"
                onChange={handleFieldChange}
                type="password"
                id="password"
                placeholder="Password"
                />
            </Form.Group>
                <Button variant="primary" type="submit">
                Submit
            </Button>
      </Form>
      </div>
      </div>
    )

}

export default Login