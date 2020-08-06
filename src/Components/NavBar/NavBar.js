import React, {useEffect} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css';

const NavBar = props => {
    const handleLogout = () => {
        props.clearUser();
    };

    useEffect(() => {
    function showTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var session = "AM";
        
        if(h === 0){
            h = 12;
        }

        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        
        var time = h + ":" + m + " " + session;
        document.getElementById("time").innerText = time;
        document.getElementById("time").textContent = time;
        
        setTimeout(showTime, 1000);
        
    }
    
    showTime();
    }, )
  

    return (
        <Navbar fixed="bottom" className="NavBar">
            <NavDropdown title="Start" drop="up" className="start-button">
            <Nav.Item >
                <Nav.Link className="nav-option" href="/Dashboard">Desktop</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-option" href="/Library">Library</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className="nav-option" href="/Playlist">Playlists</Nav.Link>
            </Nav.Item>
            {props.hasUser
                ? <Nav.Item><Nav.Link  className="nav-option"onClick={handleLogout}>Logout</Nav.Link></Nav.Item>
                : <Nav.Item><Nav.Link className="nav-option" href="/">Login</Nav.Link></Nav.Item>
            }
            </NavDropdown>
            <Navbar.Text id="time" className="move-right"></Navbar.Text>
        </Navbar>
    )
}

export default NavBar
