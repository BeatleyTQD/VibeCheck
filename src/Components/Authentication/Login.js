import React, { useState, useEffect } from "react";
import APIManager from '../Modules/APIManager';
import './Login.css'

const Login = (props) => {
    const [credentials, setCredentials] = useState({ userId: 0 });
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
                    props.setUser(credentials)
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
            return (window.alert("Username is incorrect."))
        }
    }
    const handleFieldChange = (event) => {
        const stateToChange = { ...credentials };
        stateToChange[event.target.id] = event.target.value;
        setCredentials(stateToChange);
    }

    return (
        <div className="login-container">
            <div className="login-bottom">
                <div className="login-header">Welcome to VibeCheck&trade;</div>
                <form onSubmit={handleLogin} className="login-field">
                    <div className="login-input-field">
                        <label htmlFor="userName">Username:</label>
                        <input className="login-form"
                            onChange={handleFieldChange}
                            type="text"
                            id="userName"
                        />
                    </div>
                    <div className="login-input-field">
                        <label htmlFor="password">Password:</label>
                        <input className="login-form"
                            onChange={handleFieldChange}
                            type="password"
                            id="password"
                        />
                    </div>
                    <p class="login-input-field">This app does NOT have real authentication, please do not use your actual credentials!</p>
                    <button type="submit" className="submit-button">
                        Login
                    </button>
                    <button
                        className="register-button"
                        onClick={() => props.history.push("/Register")}
                        type="submit">
                        Register New Account
                    </button>
                </form>
            </div>
        </div>
    )

}

export default Login