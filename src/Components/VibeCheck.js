import React, {useState} from 'react';
import NavBar from './NavBar/NavBar';
import ApplicationViews from './ApplicationViews';
import './VibeCheck.css';

const VibeCheck = () => {
    const isAuthenticated = () => {
        if ( sessionStorage.getItem("activeUser") !== null ||
             localStorage.getItem("activeUser") !== null
            ) {
                return true;
            } else {
                return false;
            }
        
    };

    const [hasUser, setHasUser] = useState(isAuthenticated());
    const setUser = (user) => {
        sessionStorage.setItem("activeUserID", JSON.stringify(user.userId));
        sessionStorage.setItem("activeUser", user.userName)
        setHasUser(isAuthenticated())
    };

    const clearUser = () => {
        sessionStorage.clear();
        setHasUser(isAuthenticated());
      }

return (
        <>
            <NavBar hasUser={hasUser} clearUser={clearUser} />
            <ApplicationViews setUser={setUser} hasUser={hasUser} />
        </>
    )   
}

export default VibeCheck