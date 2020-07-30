import React, {useEffect, useState} from 'react';
import { Jumbotron, Button, CardDeck, Card } from 'react-bootstrap';
import APIManager from '../Modules/APIManager';
import './Dashboard.css';

const Dashboard = props => {
    return (
        <>
        <Jumbotron>
            <CardDeck>
                <Card>
                    <Card.Body>
                    <Card.Title>Welcome, {sessionStorage.activeUser}.</Card.Title>
                    <Card.Text>
                        {/* <ul>
                            <li>A photo will go here</li>
                            <li>Number of tracks will go here also</li>
                        </ul> */}
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                    <Card.Title>Vibe Check:</Card.Title>
                    <Card.Text>
                        {/* <ul>
                            <li>Red</li>
                            <li>Blue</li>
                            <li>Yellow</li>
                            <li>Orange</li>
                            <li>Green</li>
                            <li>Purple</li>
                            <li>Brown</li>
                            <li>White</li>
                            <li>Black</li>
                        </ul> */}
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Jumbotron>
        <p>Stretch goal cards will go here...eventually</p>
        <p>Stretch goal cards will go here...eventually</p>
        <p>Stretch goal cards will go here...eventually</p>
        <p>Stretch goal cards will go here...eventually</p>
        <p>Stretch goal cards will go here...eventually</p>
        <p>Stretch goal cards will go here...eventually</p>
        </>
    )
}

export default Dashboard