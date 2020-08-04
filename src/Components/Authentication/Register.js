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
      <div className="register-container">
      <div className="register-top">
      </div>
          <div className="register-bottom">
              <div className="register-header">Welcome to VibeCheck&trade;</div>
              <form onSubmit={handleRegister} classname="register-field">
                  <div className="register-input-field">
                      <label>Email:</label>
                      <input className="register-form"
                          onChange={handleFieldChange}
                          type="email"
                          id="email"
                      />
                  </div>
                  <div className="register-input-field">
                      <label>Username:</label>
                      <input className="register-form"
                          onChange={handleFieldChange}
                          type="text"
                          id="userName"
                      />
                  </div>
                  <div>
                      <label>Password:</label>
                      <input className="register-form"
                      onChange={handleFieldChange}
                      type="password"
                      id="password"
                      />
                  </div>
                  <div>
                      <label>Confirm Password:</label>
                      <input className="register-form"
                      onChange={handleFieldChange}
                      type="password"
                      id="confirmedPassword"
                      />
                  </div>
                  <button type="submit" className="submit-button">
                      Register
                  </button>
              </form>
          </div>
    </div>
    )
}

export default Register
