import React, { useState, useEffect } from 'react';
import { Form, Button, Card } from "react-bootstrap";
import APIManager from '../Modules/APIManager';
import './Register.css';

const Register = (props) => {
    const [credentials, setCredentials] = useState({ email:"", userName:"", password: ""});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        APIManager.GetAll("users")
        .then((response) => {
            setUsers(response)
        })
    }, [])

    const handleRegister = event => {
        event.preventDefault();
        const userEmailInputValue = document.getElementById("email").value
        const userNameInputValue = document.getElementById("userName").value
        const userPasswordValue = document.getElementById("password").value
        const userConfirmedPasswordValue = document.getElementById("confirmedPassword").value
        let userNameCheck = true;
        let userEmailCheck = true;

        //Checks newly input user info against database for duplicates
        users.forEach(user => {
            if (user.email === userEmailInputValue) {
                userEmailCheck = false;
                if (user.userName === userNameInputValue){
                    userNameCheck = false;
                }
            }
        })
            if (userEmailCheck === true && userEmailInputValue !== ""){
                if (userNameCheck === true && userNameInputValue !== "") {
                    if (userPasswordValue === userConfirmedPasswordValue && userPasswordValue !== "") {
                        APIManager.Save("users", credentials).then(() => {
                            APIManager.GetAll("users").then((response) => {
                                response.forEach(user => {
                                    if(user.userName === userNameInputValue){
                                      // Assigns json-server generated user id to the user object itself
                                        credentials.userId = user.id
                                        props.setUser(credentials)
                                        props.history.push("/Dashboard")
                                    }
                                })
                            })
                        })
                    } else {
                        return (window.alert("Retry Password"))
                    }
                } else {
                    return(window.alert("Retry Username"))
                }
            } else {
                return (window.alert("Retry Email"))
            }
    }
    const handleFieldChange = (event) => {
        const stateToChange = {...credentials};
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    }
    return (
      <div className="registerContainer">
        <Card className="registrationCard">
        <Card.Body>
          <Form className="registerForm" onSubmit={handleRegister}>
            <Form.Group>
              <Form.Label className="registerLabel">Email address</Form.Label>
              <Form.Control
                className="registerLogin"
                onChange={handleFieldChange}
                type="email"
                id="email"
                placeholder="Enter Email"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="registerLabel">Username</Form.Label>
              <Form.Control
                className="registerLogin"
                onChange={handleFieldChange}
                type="userName"
                id="userName"
                placeholder="Enter Username"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label className="registerLabel">Password</Form.Label>
              <Form.Control
                className="registerLogin"
                onChange={handleFieldChange}
                type="password"
                id="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="registerLabel">
                Confirm Password
              </Form.Label>
              <Form.Control
                className="registerLogin"
                type="password"
                id="confirmedPassword"
                placeholder="Confirm Password"
              />
            </Form.Group>
            <Button
              className="registrationButton"
              onClick={handleRegister}
              variant="primary"
              type="submit"
            >
              Register
            </Button>
          </Form>
          </Card.Body>
        </Card>
      </div>
    )
}

export default Register