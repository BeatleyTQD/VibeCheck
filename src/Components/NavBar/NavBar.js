import React from 'react';
import { withRouter } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import './NavBar.css';

const NavBar = props => {
    const handleLogout = () => {
        props.clearUser();
    };
    return (
        <Nav justify variant="tabs" defaultActiveKey="/Dashboard">
        <Nav.Item>
            <Nav.Link href="/Dashboard">Dashboard</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/Library">Library</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-2">Playlists</Nav.Link>
        </Nav.Item>
        {props.hasUser
            ? <Nav.Item><Nav.Link onClick={handleLogout}>Logout</Nav.Link></Nav.Item>
            : <Nav.Item><Nav.Link href="/">Login</Nav.Link></Nav.Item>
        }
        </Nav>
    )

}

export default NavBar