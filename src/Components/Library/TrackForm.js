import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import APIManager from '../Modules/APIManager';

const TrackForm = props => {
    const [track, setTrack] = useState({name:"", artist:"", uri:"", colorId: 0});
    const [colors, setColors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...track };
        stateToChange[evt.target.id] = evt.target.value;
        setTrack(stateToChange);
    };
    const handleColorFieldChange = evt => {
        const stateToChange = { ...track };
        stateToChange[evt.target.id] = parseInt(evt.target.value);
        setTrack(stateToChange);
    };

    APIManager.GetAll("colors").then(colors => {
        setColors(colors)
    });

    const constructNewTrack = evt => {
        evt.preventDefault();
        if (track.name === "" || track.artist === "" || track.uri === "" || track.colorId === 0) {
            window.alert("Please fill out entire form");
        } else {
            setIsLoading(true);
            APIManager.Save(track)
            .then(() => props.history.push("/Library"));
        }
    };

    return (
        <>
            <Form>
            <Form.Row>
                <div>
                <Col>
                    <Form.Control placeholder="Track Name" />
                </Col>
                <Col>
                    <Form.Control placeholder="Track Artist" />
                </Col>
                </div>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                
                </Form.Control>
            </Form.Group>
            </Form.Row>
            </Form>
        </>
    )
}

export default TrackForm