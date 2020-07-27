import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Dashboard from './Dashboard/Dashboard';

const ApplicationViews = props => {
    const hasUser = props.hasUser
    const setUser = props.setUser

    return (
        <>
        {/* Login */}
        <Route path="/Login" render={(props) => {
            return <Login setUser={setUser} {...props} />;
        }}
        />

        {/* Register */}
        <Route path="/Register" render={(props) => {
            return <Register setUser={setUser} {...props} />;
        }}
        />

        {/* Dashboard */} 
        <Route path="/Dashboard" render={(props) => {
            if(hasUser){
                return <Dashboard {...props} />;
            } else {
                return <Redirect exact to="/Login" />
            }
        }}
        />

        </>
    )
}

export default ApplicationViews