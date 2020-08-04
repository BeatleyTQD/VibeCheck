import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import APIManager from "../Modules/APIManager";


const TrackEditForm = props => {
    const [track, setTrack] = useState({userId: parseInt(sessionStorage.activeUserID), name:"", artist:"", uri:"", description:"", colorId: 0});
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

     //Splits Spotify URI to grab the part we actually need - the string associated with the specific track
     const handleURIFieldChange = evt => {
        const stateToChange = { ...track };
        stateToChange[evt.target.id] = evt.target.value.split(":")[2];
        setTrack(stateToChange)
    };

    const updateExistingTrack = evt => {
        evt.preventDefault();
        setIsLoading(true);
        
        const editedTrack = {
            id: props.match.params.trackId,
            name: track.name,
            artist: track.artist,
            uri: track.uri,
            description: track.description,
            userId: parseInt(track.userId),
            colorId: parseInt(track.colorId)
        };

        APIManager.Update("tracks", track.id, editedTrack)
        .then(() => props.history.push("/Library"))
    };

    useEffect(() => {
        APIManager.GetById("tracks", props.match.params.trackId)
        .then(track => {
            //grabs colors for selection in edit form
            APIManager.GetAll("colors").then(colors =>{
                setColors(colors)
            });
            setTrack(track);
            setIsLoading(false);
        });
    }, []);
    
    return (
        <>
        <Form>
            <div className="new-track-container">
                <div className="new-track-top-half">
                    <div className="new-track-top-left">
                        
                        <Form.Group className="trackFormGroup" controlId="name">
                            <Form.Label className="trackName">Track Name</Form.Label>
                            <Form.Control className="trackForm"
                                onChange={handleFieldChange}
                                type="text"
                                value={track.name}/>
                                
                        </Form.Group>
                        <Form.Group className="trackFormGroup" controlId="artist">
                            <Form.Label className="trackArtist">Track Artist</Form.Label>
                            <Form.Control className="trackForm"
                                onChange={handleFieldChange}
                                type="text"
                                value={track.artist}/>
                        </Form.Group>
                    </div>

                    <div className="new-track-top-right">
                        <Form.Group className="trackFormGroup" controlId="colorId">
                            <Form.Label>Track Color</Form.Label>
                            <Form.Control as="select" className="trackForm"
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
                    <Form.Group className="trackFormGroup" controlId="uri">
                        <Form.Label className="trackURL">Spotify URL</Form.Label>
                        <Form.Control className="trackForm"
                            onChange={handleURIFieldChange}
                            type="text"
                            value={track.uri}/>
                    </Form.Group>
                    <Form.Group className="trackFormGroup" controlId="description">
                        <Form.Label className="trackDescription">Description</Form.Label>
                        <Form.Control className="trackForm"
                            onChange={handleFieldChange}
                            type="text"
                            value={track.description}/>
                    </Form.Group>
                </div>
            </div>
            <Button variant="primary" onClick={updateExistingTrack}>Update Track</Button>{' '}
        </Form>
        </>
    )
}

export default TrackEditForm