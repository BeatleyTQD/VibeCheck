import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import APIManager from '../Modules/APIManager';

const TrackForm = props => {
    const [track, setTrack] = useState({name:"", artist:"", uri:"", description:"", colorId: 0});
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
    const handleURIFieldChange = evt => {
        const stateToChange = { ...track };
        stateToChange[evt.target.id] = evt.target.value.split(":")[2];
        setTrack(stateToChange)
    };

    APIManager.GetAll("colors").then(colors => {
        setColors(colors)
    });

    const constructNewTrack = evt => {
        evt.preventDefault();
        if (track.name === "" || track.artist === "" || track.uri === "" || track.colorId === 0 || track.description === "") {
            window.alert("Please fill out entire form");
        } else {
            setIsLoading(true);
            APIManager.Save("tracks",track)
            .then(() => props.history.push("/Library"));
        }
    };

    return (
        <>
        <Form>
            <div className="new-track-container">
                <div className="new-track-top-half">
                    <div className="new-track-top-left">
                        
                        <Form.Group>
                            <Form.Label className="trackName">Track Name</Form.Label>
                            <Form.Control className="trackForm"
                                onChange={handleFieldChange}
                                type="text"
                                id="name"
                                placeholder="Enter Track Name"/>

                            <Form.Label className="trackArtist">Track Artist</Form.Label>
                            <Form.Control className="trackForm"
                                onChange={handleFieldChange}
                                type="text"
                                id="artist"
                                placeholder="Enter Artist Name"/>
                        </Form.Group>
                    </div>

                    <div className="new-track-top-right">
                        <Form.Group controlId="trackColor.ControlSelect1">
                            <Form.Label>Track Color</Form.Label>
                            <Form.Control as="select" className="trackForm"
                                id="colorId"
                                value={parseInt(track.colorId)}
                                onChange={handleColorFieldChange}>
                            <option>Select A Color</option>
                            {colors.map(color =>
                                <option key={color.id} value={color.id}>{color.name}</option>)}
                            </Form.Control>
                        </Form.Group>
                    </div>
                </div>

                <div className="new-track-bottom-half">
                    <Form.Group>
                        <Form.Label className="trackURL">Spotify URL</Form.Label>
                        <Form.Control className="trackForm"
                            onChange={handleURIFieldChange}
                            type="text"
                            id="uri"
                            placeholder="Enter Spotify URI"/>

                        <Form.Label className="trackDescription">Description</Form.Label>
                        <Form.Control className="trackForm"
                            onChange={handleFieldChange}
                            type="text"
                            id="description"
                            placeholder="What do you see?"/>
                    </Form.Group>
                </div>
            </div>
            <Button variant="primary" onClick={constructNewTrack}>Add Track</Button>{' '}
        </Form>
        </>
    )
}

export default TrackForm