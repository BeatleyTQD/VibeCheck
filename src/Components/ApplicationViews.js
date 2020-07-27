import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import Login from './Authentication/Login';
import Register from './Authentication/Register';

const ApplicationViews = props => {
    const hasUser = props.hasUser
    const setUser = props.setUser

    return (
        <>
        {/* Login */}
        <Route exact path="/" render={(props) => {
            return <Login setUser={setUser} {...props} />;
        }}
        />
        {/* Register */}
        <Route path="/Register" render={(props) => {
            return <Register setUser={setUser} {...props} />;
        }}
        />
        </>
    )
}

export default ApplicationViews