import React, {useEffect, useState} from 'react';
import { Jumbotron, CardDeck, Card } from 'react-bootstrap';
import APIManager from '../Modules/APIManager';
import './Dashboard.css';

const Dashboard = props => {
    const [colors, setColors] = useState([]);

    const getColorAssociations = () => {
        return APIManager.GetAll("colors").then(colors => {
            setColors(colors)
        })
    }

    useEffect(() => {
        getColorAssociations();
    }, []);

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
                        {colors.map(color =>
                            <div key={color.id}>{color.name}: {color.mood}</div>)}
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