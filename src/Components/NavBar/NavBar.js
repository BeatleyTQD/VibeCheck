import React from 'react';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
    const handleLogout = () => {
        props.clearUser();
    };
    return (
        <header>
            <nav className="navBar">
                <ul className="container">
                    <li>
                        <NavLink className="nav-link" exact to="/Dashboard" >
                            Dashboard
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" exact to="/Library" >
                            Library
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-link" exact to="/Playlist" >
                            Playlist
                        </NavLink>
                    </li>
                {props.hasUser
                    ? <li>
                        <span className="nav-link" onClick={handleLogout}> Logout </span>
                    </li>
                    : <li>
                        <NavLink className="nav-link" to="/">Login</NavLink>
                    </li>}
                </ul>
            </nav>
        </header>
    )

}

export default NavBar