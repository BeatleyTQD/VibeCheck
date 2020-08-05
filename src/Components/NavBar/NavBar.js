import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css';

const NavBar = props => {
    const handleLogout = () => {
        props.clearUser();
    };


    return (
        <Navbar fixed="bottom" className="NavBar">
        <NavDropdown className="log-option" title="Start" drop="up" className="start-button">
        <Nav.Item >
            <Nav.Link className="nav-option" href="/Dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="nav-option" href="/Library">Library</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link className="nav-option" href="/Playlist">Playlists</Nav.Link>
        </Nav.Item>
        </NavDropdown>
        {props.hasUser
            ? <Nav.Item><Nav.Link  className="log-option"onClick={handleLogout}>Logout</Nav.Link></Nav.Item>
            : <Nav.Item><Nav.Link className="log-option" href="/">Login</Nav.Link></Nav.Item>
        }
        </Navbar>
    
    )

}

export default NavBar
