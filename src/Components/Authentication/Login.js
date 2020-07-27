import React, { useState, useEffect } from "react";
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
                        alert("Password is incorrect.")
                    )
                }
            } else {
                return("Username is incorrect.")
            }
    }
    const handleFieldChange = (event) => {
        const stateToChange = { ...credentials };
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    }

    return (
        <div>hello world</div>
    )

}

export default Login