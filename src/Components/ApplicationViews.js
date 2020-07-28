import React from 'react';
import {Route, Redirect } from 'react-router-dom';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Dashboard from './Dashboard/Dashboard';
import TrackList from './Library/TrackList';

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

        {/* Dashboard */} 
        <Route path="/Dashboard" render={(props) => {
            if(hasUser){
                return <Dashboard {...props} />;
            } else {
                return <Redirect exact to="/" />
            }
        }}
        />

        {/* Library */}
        <Route path="/Library" render={(props) => {
            if(hasUser){
                return <TrackList {...props} />;
            } else {
                return <Redirect exact to="/" />
            }
        }}
        />
        </>
    )
}

export default ApplicationViews