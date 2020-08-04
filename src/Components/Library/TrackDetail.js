import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import Iframe from 'react-iframe'
import APIManager from '../Modules/APIManager';

const TrackDetail = props => {
    const [track, setTrack] = useState({name:"", artist:"", uri:"", description:"", colorId: 0, id:0});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        APIManager.GetById("tracks", props.trackId)
        .then(track => {
            setTrack({
                name: track.name,
                artist: track.artist,
                uri: track.uri,
                description: track.description,
                colorId: track.colorId,
                id: track.id
            });
            setIsLoading(false);
        });
    }, [props.trackId]);

    if (track.name !== undefined){
        return (
            <Card className="details-container">
                <div id={`color-${track.colorId}`}>
                    <Card.Body className="details-card-top">
                        <Iframe src={`https://open.spotify.com/embed/track/${track.uri}`} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></Iframe>
                        {track.name} {track.artist} {track.description}
                    </Card.Body>
                    <Card.Body className="details-card-bottom">
                        <Button variant="primary" onClick={() => props.history.push(`/Library/${track.id}/Edit`)}>Edit</Button>{' '}
                        {/* <Button variant="warning" onClick={() => props.deleteTrack(props.tracks.id)}>Delete</Button>{' '} */}
                    </Card.Body>
                </div>
            </Card>
        )
    } else {
        return <Redirect to="/" />
    }
};


export default TrackDetail
